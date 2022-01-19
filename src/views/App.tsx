import { HelmetProvider } from 'react-helmet-async'

import { PrivateRoutes, PublicRoutes } from './../routes'

function App() {
  const auth = false
  return (
    <HelmetProvider>
      <div className="App">{auth ? <PrivateRoutes /> : <PublicRoutes />}</div>
    </HelmetProvider>
  )
}

export default App
