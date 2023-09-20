import { UserContext } from '@contexts/UserContext'
import { UserDTO } from '@root/interfaces/UserDTO'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const useUser = () => {
    const { dispatch, state } = useContext(UserContext)
    const navigate = useNavigate()

    const onLogin = (data: UserDTO | null) => {
        dispatch({ type: 'LOGIN', payload: { data } })
    }

    const onLogout = () => {
        dispatch({ type: 'LOGOUT' })
        localStorage.removeItem('token')
        navigate('/signin')
    }

    const onUpdate = (data: UserDTO | null) => {
        dispatch({ type: 'UPDATE', payload: { data } })
    }

    return {
        userData: state,
        methods: { onLogin, onLogout, onUpdate },
    }
}

export default useUser
