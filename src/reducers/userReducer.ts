import { ActionUser, StateUser } from '@root/interfaces/StateUser'

export function userReducer(state: StateUser, action: ActionUser): StateUser {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                loggedIn: true,
                data: action.payload.data,
            }

        case 'UPDATE':
            return {
                ...state,
                loggedIn: true,
                data: action.payload.data,
            }

        case 'LOGOUT':
            return {
                ...state,
                loggedIn: false,
                data: undefined,
            }

        default:
            return { ...state }
    }
}
