import './styles/App.css'
import { NextUIProvider } from '@nextui-org/react'
import { AuthProvider } from './pages/auth/authProvider'
import AppRoutes from './routes/router'

function App() {
  return (
    <NextUIProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </NextUIProvider>
  )
}

export default App
