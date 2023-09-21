import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import UserProvider from '@contexts/UserContext.tsx'

window.onbeforeunload = () => {
    const href = location.href
    const path = href.replace(location.origin, '')
    localStorage.setItem('path', path)
}

window.onload = () => {
    const href = location.href
    const path = href.replace(location.origin, '')
    localStorage.setItem('path', path)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider locale={esES}>
            <BrowserRouter>
                <UserProvider>
                    <App />
                </UserProvider>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
)
