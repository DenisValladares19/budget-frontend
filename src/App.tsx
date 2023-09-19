import { useRoutes } from 'react-router-dom'
import { publicRoutes } from './routes'

function App() {
    const routes = useRoutes(publicRoutes)
    return routes
}

export default App
