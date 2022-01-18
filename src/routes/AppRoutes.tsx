import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>cargando...</p>}>
        <Routes></Routes>
      </Suspense>
    </BrowserRouter>
  )
}
