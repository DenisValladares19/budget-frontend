import Home from '@pages/Home'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'

export const publicRoutes = [
    { path: '/signin', element: <SignIn /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/', element: <Home /> },
]
