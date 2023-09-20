import { BASE_URL } from '@helpers/Constants.utils'
import {
    ConfigFetch,
    ResponseDTO,
    StateFetch,
    TypeReturnHook,
} from '@root/interfaces/API'
import { fetchReducer } from '@root/reducers/fetchReducer'
import { useReducer } from 'react'
import useStorage from './useStorage'

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
    const [token] = useStorage<string>('token')

    async function request<M = unknown>(config: ConfigFetch<M>) {
        const baseUrl = `${BASE_URL}${config.url}${getParams(config.params)}`
        dispatch({ type: 'INIT' })
        try {
            const response = await fetch(baseUrl, {
                method: config.method,
                body:
                    config.method !== 'GET'
                        ? JSON.stringify(config.data)
                        : undefined,
                headers: getHeader(token),
            })

            const result: ResponseDTO<T> = await response.json()

            if (response.ok) {
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

    const getHeader = (token?: string): Headers => {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        if (token) {
            headers.append('Authorization', token)
        }
        return headers
    }

    return [state, request]
}
