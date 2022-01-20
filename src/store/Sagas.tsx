import { fork, all } from 'redux-saga/effects'

import authSaga from '../services/auth/authSaga'

export default function* rootSaga() {
  yield all([fork(authSaga)])
}
