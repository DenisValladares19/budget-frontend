import { useRoutes } from 'react-router-dom'
import { privateRoute, publicRoutes } from './routes'
import { useApi } from '@hooks/useApi'
import { UserDTO } from './interfaces/UserDTO'
import LoadingFullScreen from '@components/LoadingFullScreen'
import { useEffect } from 'react'
import useUser from '@hooks/useUser'

function App() {
    const publicRoute = useRoutes(publicRoutes)
    const mainRoute = useRoutes(privateRoute)
    const token = localStorage.getItem('token')
    const [stateUser, fetchUser] = useApi<UserDTO>()
    const { userData, methods } = useUser()

    useEffect(() => {
        if (!userData.data && token) {
            fetchUser({
                method: 'GET',
                url: '/users/info',
            }).then((res) => {
                methods.onUpdate(res.data)
            })
        }
    }, [])

    if (stateUser.isLoading) {
        return <LoadingFullScreen />
    }

    if (userData.data && token) {
        return mainRoute
    }

    return publicRoute
}

export default App
