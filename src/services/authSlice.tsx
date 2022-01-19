import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authentication: false,
  error: false,
  success: false,
  loading: false,
  token: '',
  message: '',
  username: '',
}

export const AUTH_KEY = 'AUTH'

const AuthSlice = createSlice({
  name: AUTH_KEY,
  initialState,
  reducers: {
    login: state => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      authentication: true,
      error: false,
      success: true,
      loading: false,
      token: payload.token,
      message: 'Inicio de sesión correcto',
      user: payload.username,
    }),
    loginFailed: (state, { payload }) => ({
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
