import './styles/App.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/router'

function App() {
  const router = appRouter();
  return (
    <NextUIProvider>
      <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </NextUIProvider>
  )
}

export default App
