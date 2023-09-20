import { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import FloatMenu from '@components/FloatMenu'

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-screen items-center">
            <Header />
            <div className="px-8 py-4 max-w-[1200px] block w-full main-container">
                {children}
            </div>
            <Footer />
            <FloatMenu />
        </div>
    )
}

export default Layout
