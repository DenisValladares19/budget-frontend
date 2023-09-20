import Home from '@pages/Home'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'
import { Navigate } from 'react-router-dom'

export const publicRoutes = [
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '*', element: <Navigate to={'/signin'} /> },
]

export const privateRoute = [{ path: '/', element: <Home /> }]
