import { put, takeLatest, all } from 'redux-saga/effects'

import { login, loginSuccess, loginFailed } from './authSlice'

import { DB_USERS } from '../../common/dummy/users'
import { loginAction } from './types'
import { message } from 'antd'

function* fakeLogin({ payload }: loginAction) {
  const validUser = DB_USERS.find(
    e => e.email === payload.email && e.password === payload.password
  )
  if (validUser) {
    message.success('Inicio de sesión exitoso')
    yield put(
      loginSuccess({ token: validUser.accessToken, user: validUser.user })
    )
  } else {
    message.error('No existe ese usuario, en nuestra base de datos')
    yield put(
      loginFailed({ error: 'No existe ese usuario, en nuestra base de datos' })
    )
  }
}

function* ActionWatcher() {
  yield takeLatest(login, fakeLogin)
}

export default function* AuthSaga() {
  yield all([ActionWatcher()])
}
