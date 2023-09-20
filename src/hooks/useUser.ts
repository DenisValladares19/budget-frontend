import { UserContext } from '@contexts/UserContext'
import { UserDTO } from '@root/interfaces/UserDTO'
import { useContext } from 'react'
import useStorage from './useStorage'
import { useNavigate } from 'react-router-dom'

const useUser = () => {
    const { dispatch, state } = useContext(UserContext)
    const [, , deleteItem] = useStorage()
    const navigate = useNavigate()

    const onLogin = (data: UserDTO) => {
        dispatch({ type: 'LOGIN', payload: { data } })
    }

    const onLogout = () => {
        dispatch({ type: 'LOGOUT' })
        deleteItem('token')
        navigate('/signin')
    }

    const onUpdate = (data: UserDTO) => {
        dispatch({ type: 'UPDATE', payload: { data } })
    }

    return {
        userData: state,
        methods: { onLogin, onLogout, onUpdate },
    }
}

export default useUser
