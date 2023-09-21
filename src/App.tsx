import { useNavigate, useRoutes } from 'react-router-dom'
import { privateRoute, publicRoutes } from './routes'
import { useApi } from '@hooks/useApi'
import { UserDTO } from './interfaces/UserDTO'
import LoadingFullScreen from '@components/LoadingFullScreen'
import { FC, useEffect } from 'react'
import useUser from '@hooks/useUser'

function App() {
    const publicRoute = useRoutes(publicRoutes)
    const token = localStorage.getItem('token')
    const [stateUser, fetchUser] = useApi<UserDTO>()
    const { userData, methods } = useUser()
    const path = localStorage.getItem('path')

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
        return <PrivateRoute path={path} />
    }

    return publicRoute
}

const PrivateRoute: FC<{ path: string | null }> = (props) => {
    const mainRoute = useRoutes(privateRoute)
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/' && props.path !== '/') {
            navigate(props.path || '/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props?.path])

    return mainRoute
}

export default App
