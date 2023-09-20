import { useRoutes } from 'react-router-dom'
import { privateRoute, publicRoutes } from './routes'
import useStorage from '@hooks/useStorage'

function App() {
    const publicRoute = useRoutes(publicRoutes)
    const mainRoute = useRoutes(privateRoute)
    const [token] = useStorage<string>()

    return publicRoute
}

export default App
