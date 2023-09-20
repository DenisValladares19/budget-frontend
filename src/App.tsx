import { useRoutes } from 'react-router-dom'
import { privateRoute, publicRoutes } from './routes'
import { useApi } from '@hooks/useApi'
import { UserDTO } from './interfaces/UserDTO'
import LoadingFullScreen from '@components/LoadingFullScreen'
import { useEffect } from 'react'
import useUser from '@hooks/useUser'
import { PREFIX_STORAGE } from '@helpers/Constants.utils'

function App() {
    const publicRoute = useRoutes(publicRoutes)
    const mainRoute = useRoutes(privateRoute)
    const token = localStorage.getItem(PREFIX_STORAGE + 'token')
    const [stateUser, fetchUser] = useApi<UserDTO>()
    const { userData, methods } = useUser()

    useEffect(() => {
        console.log(!userData.data && Boolean(token))
        console.log(!userData.data, Boolean(token))

        if (!userData.data && Boolean(token)) {
            fetchUser({
                method: 'GET',
                url: '/users/info',
            }).then((res) => {
                methods.onUpdate(res.data)
                console.log(res)
            })
        }
    }, [token])

    if (stateUser.isLoading) {
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
