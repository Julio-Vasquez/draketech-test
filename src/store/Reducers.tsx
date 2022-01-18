import { combineReducers, AnyAction } from '@reduxjs/toolkit'

const appReducers = combineReducers({})

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === 'auth/logout') state = undefined
  return appReducers(state, action)
}

export type RootState = ReturnType<typeof appReducers>

export default rootReducer
