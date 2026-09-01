import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <AppRoutes />
    </AuthContextProvider>
)
