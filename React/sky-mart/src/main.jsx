import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactRouterProvider from './ReactRouterProvider'
import { MyStoreProvider } from './Context/MyStore'

createRoot(document.getElementById('root')).render(
    <MyStoreProvider>
      <ReactRouterProvider />
    </MyStoreProvider>
)
