import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { Loading } from './../components/Loading'

const Login = lazy(() => import('../views/Public/Login'))

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading message="Cargando" />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
