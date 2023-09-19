import { FC, ReactNode } from 'react'

interface PublicLayoutProps {
    children: ReactNode
}
const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
    const year = new Date().getFullYear()

    return (
        <div className="bg-slate-700 relative flex justify-center items-center w-screen h-screen">
            {children}

            <div className="absolute bottom-3 text-slate-300 p-3 text-center">
                &copy; Todos los derechos reservados - Denis Valladares {year}
            </div>
        </div>
    )
}

export default PublicLayout
