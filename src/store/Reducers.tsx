import { combineReducers, AnyAction } from '@reduxjs/toolkit'

import LoginReducer, {
  AUTH_KEY,
  logout,
  initialState,
} from './../services/authSlice'

const appReducers = combineReducers({
  [AUTH_KEY]: LoginReducer,
})

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'AUTH/LOGOUT' || action.type === logout().type) {
    state = {
      [AUTH_KEY]: initialState,
    }
  }
  return appReducers(state, action)
}

export type RootState = ReturnType<typeof appReducers>

export default rootReducer
