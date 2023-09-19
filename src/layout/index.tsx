import { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col w-screen mx-auto">
            <Header />
            <div className="px-8 py-4 max-w-[1200px] main-container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
