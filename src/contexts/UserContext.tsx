import { ActionUser, StateUser } from '@root/interfaces/StateUser'
import { userReducer } from '@root/reducers/userReducer'
import { Dispatch, FC, ReactNode, createContext, useReducer } from 'react'

interface TypeContext {
    state: StateUser
    dispatch: Dispatch<ActionUser>
}

const initialState: StateUser = {
    loggedIn: false,
    data: undefined,
}

export const UserContext = createContext<TypeContext>({
    state: initialState,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch: (_value: ActionUser) => {},
})

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <UserContext.Provider value={{ dispatch, state }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
