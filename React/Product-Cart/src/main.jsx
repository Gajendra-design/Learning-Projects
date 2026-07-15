import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyStoreProvider } from './Context/MyStore.jsx'

createRoot(document.getElementById('root')).render(
    <MyStoreProvider>
        <App />
    </MyStoreProvider>
)
