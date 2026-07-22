import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { MyStoreProvider } from './Context/MyStore.jsx'

createRoot(document.getElementById('root')).render(
    <MyStoreProvider>
        <AppRoutes />
    </MyStoreProvider>
)
