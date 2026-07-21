import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { MyStoreProvider } from './Context/MyStore'
import Auth from './components/auth/Auth.jsx'
import Register from './components/auth/Register.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyStoreProvider>
      <Auth />
    </MyStoreProvider>
  </BrowserRouter>
)
