import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/auth.context.jsx'
import { PermissionsProvider } from './context/permissions.context.jsx'



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
      <PermissionsProvider>
        <App />
      </PermissionsProvider>
    </AuthProvider>
  // </StrictMode>
)
