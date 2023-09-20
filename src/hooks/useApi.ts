import { BASE_URL } from '@helpers/Constants.utils'
import {
    ConfigFetch,
    ResponseDTO,
    StateFetch,
    TypeReturnHook,
} from '@root/interfaces/API'
import { fetchReducer } from '@root/reducers/fetchReducer'
import { useReducer } from 'react'
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

export function useApi<T = unknown>(): TypeReturnHook<T> {
    const initialState: StateFetch<T> = {
        code: '',
        data: null,
        isError: false,
        isLoading: false,
        isSuccess: false,
        message: '',
    }

    const [state, dispatch] = useReducer(fetchReducer<T>, initialState)
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    async function request<M = unknown>(config: ConfigFetch<M>) {
        const baseUrl = `${BASE_URL}${config.url}${getParams(config.params)}`
        dispatch({ type: 'INIT' })
        try {
            const response = await axios(baseUrl, {
                method: config.method,
                data: config.method !== 'GET' ? config.data : undefined,
                headers: Object.fromEntries(getHeader(token)),
            })

            const result: ResponseDTO<T> = await response.data

            if (response.status === 200) {
                dispatch({
                    type: 'SUCCESS',
                    payload: {
                        code: result.code,
                        data: result.content,
                        message: result.message,
                    },
                })

                return {
                    ok: true,
                    data: result.content,
                    message: result.message,
                    code: result.code,
                }
            }

            dispatch({
                type: 'ERROR',
                payload: {
                    code: result.code || response.status.toString(),
                    message: result.message,
                },
            })
            return {
                ok: false,
                data: null,
                message: result.message,
                code: result.code || response.status.toString(),
            }
        } catch (error) {
            console.log('[Error useApi]', error)
            dispatch({ type: 'ERROR', payload: { code: '', message: '' } })

            if (error instanceof AxiosError) {
                if (error.response && error.response.status === 403) {
                    localStorage.removeItem('token')
                    navigate('/signin')
                }

                return {
                    ok: false,
                    data: null,
                    message: '',
                    code: error.response?.status?.toString() || '',
                }
            }
            return {
                ok: false,
                data: null,
                message: '',
                code: '',
            }
        }
    }

    const getParams = (obj?: Record<string, string>): string => {
        if (!obj) return ''
        return '?' + new URLSearchParams(obj).toString()
    }

    const getHeader = (token: string | null): Headers => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        if (token) {
            headers.append('Authorization', token)
        }
        return headers
    }

    return [state, request]
}
