import { StateFetch, TypeAction } from '@root/interfaces/API'

export function fetchReducer<T = unknown>(
    state: StateFetch<T>,
    action: TypeAction<T>
): StateFetch<T> {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case 'SUCCESS':
            return {
                ...state,
                isError: false,
                isLoading: false,
                isSuccess: true,
                code: action.payload.code,
                message: action.payload.message,
                data: action.payload.data,
            }

        case 'ERROR':
            return {
                ...state,
                isError: true,
                isLoading: false,
                isSuccess: false,
                code: action.payload.code,
                message: action.payload.message,
            }

        default:
            return { ...state }
    }
}
