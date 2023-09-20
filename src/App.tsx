import { useRoutes } from 'react-router-dom'
import { privateRoute, publicRoutes } from './routes'
import useStorage from '@hooks/useStorage'
import { useApi } from '@hooks/useApi'
import { UserDTO } from './interfaces/UserDTO'
import LoadingFullScreen from '@components/LoadingFullScreen'
import { useEffect } from 'react'
import useUser from '@hooks/useUser'

function App() {
    const publicRoute = useRoutes(publicRoutes)
    const mainRoute = useRoutes(privateRoute)
    const [token] = useStorage<string>('token')
    const [stateUser, fetchUser] = useApi<UserDTO>()
    const { userData, methods } = useUser()

    useEffect(() => {
        if (!userData.data && token) {
            fetchUser({
                method: 'GET',
                url: '/users/info',
            }).then((res) => {
                methods.onUpdate(res.data)
                console.log(res)
            })
        }
    }, [token])

    if (stateUser.isLoading || !token) {
        return <LoadingFullScreen />
    }

    if (!token && userData.data) {
        return <LoadingFullScreen />
    }

    if (userData.data && token) {
        return mainRoute
    }

    return publicRoute
}

export default App
