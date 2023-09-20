import { UserDTO } from './UserDTO'

export interface StateUser {
    data?: UserDTO
    loggedIn: boolean
}

export type ActionUser =
    | { type: 'LOGOUT' }
    | { type: 'LOGIN'; payload: { data: UserDTO | null } }
    | { type: 'UPDATE'; payload: { data: UserDTO | null } }
