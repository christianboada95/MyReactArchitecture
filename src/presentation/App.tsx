import './styles/App.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/router'
import { Provider } from 'react-redux';
import store from '@domain/stores/app.store'

function App() {
  const router = appRouter();
  return (
    <NextUIProvider>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
      </Provider>
    </NextUIProvider>
  )
}

export default App
