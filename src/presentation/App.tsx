import './styles/App.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { AppRouter }  from '@presentation/routes/App.router'
import { charactersRepository } from '@infrastructure/repositories';
import ApplicationProvider from './utilities/ApplicationProvider';
import store from '@infrastructure/redux/app.store'

const createDependencies = () => ({
  charactersRepository: charactersRepository,
})

function App() {
  const router = AppRouter();
  return (
    <NextUIProvider>
      <Provider store={store}>
        <ApplicationProvider dependencies={createDependencies()}>
          <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </ApplicationProvider>
      </Provider>
    </NextUIProvider>
  )
}

export default App
