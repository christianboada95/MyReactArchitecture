import './styles/App.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/router'
import { Provider } from 'react-redux';
import store from '@domain/stores/app.store'
import { ApplicationProvider } from './components';
import { charactersRepository } from '@infrastructure/repositories';

const createDependencies = () => ({
  charactersRepository: charactersRepository,
})

function App() {
  const router = appRouter();
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
