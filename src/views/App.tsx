import { HelmetProvider } from 'react-helmet-async'

import { PrivateRoutes, PublicRoutes } from './../routes'
import TaskContextProvider from '../context/TaskContextProvider'
import { useData } from '../hooks/useData'
import { AUTH_KEY } from '../services/auth/authSlice'

function App() {
  const { authentication } = useData({ reducer: AUTH_KEY })
  return (
    <HelmetProvider>
      <TaskContextProvider>
        <div className="container-fluid">
          {authentication ? <PrivateRoutes /> : <PublicRoutes />}
        </div>
      </TaskContextProvider>
    </HelmetProvider>
  )
}

export default App
