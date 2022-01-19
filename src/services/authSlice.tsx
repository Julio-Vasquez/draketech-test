import { createSlice } from '@reduxjs/toolkit'

import { loginFailedType, loginSuccessType, loginAction } from './types'

export const initialState = {
  authentication: false,
  error: false,
  success: false,
  loading: false,
  token: '',
  message: '',
  user: '',
}

export const AUTH_KEY = 'AUTH'

const AuthSlice = createSlice({
  name: AUTH_KEY,
  initialState,
  reducers: {
    login: (state, action: loginAction) => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, { payload }: loginSuccessType) => ({
      ...state,
      authentication: true,
      error: false,
      success: true,
      loading: false,
      token: payload.token,
      message: 'Inicio de sesión correcto',
      user: payload.user,
    }),
    loginFailed: (state, { payload }: loginFailedType) => ({
      ...state,
      authentication: false,
      error: true,
      success: false,
      loading: false,
      message: payload.error,
    }),
    logout: state => ({
      ...state,
      authentication: false,
      error: false,
      success: false,
      loading: false,
      token: '',
      message: '',
      username: '',
    }),
  },
})

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions

export default AuthSlice.reducer
