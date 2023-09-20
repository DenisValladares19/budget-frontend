import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import esES from 'antd/locale/es_ES'
import StorageProvider from '@contexts/StorageContext.tsx'
import UserProvider from '@contexts/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ConfigProvider locale={esES}>
            <BrowserRouter>
                <StorageProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </StorageProvider>
            </BrowserRouter>
        </ConfigProvider>
    </React.StrictMode>
)
