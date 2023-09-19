export interface ResponseDTO<T = unknown> {
    code: string
    message: string
    content: T | null
}

export interface StateFetch<T = unknown> {
    isLoading: boolean
    isError: boolean
    isSuccess: boolean
    message: string
    code: string
    data: T | null
}

export type TypeAction<T = unknown> =
    | { type: 'INIT' }
    | {
          type: 'SUCCESS'
          payload: { data: T | null; code: string; message: string }
      }
    | { type: 'ERROR'; payload: { code: string; message: string } }

export type METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'

export type ConfigFetch<T = unknown> =
    | { method: 'GET'; url: string; params?: Record<string, string> }
    | {
          method: 'POST' | 'PUT' | 'PATCH'
          url: string
          data: T
          params?: Record<string, string>
      }

export type TypeReturnHook<T = unknown> = [
    StateFetch<T>,
    (
        config: ConfigFetch
    ) => Promise<{
        ok: boolean
        code: string
        message: string
        data: T | null
    }>,
]
