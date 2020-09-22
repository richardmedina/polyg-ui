import { put, takeLatest, all, call } from 'redux-saga/effects'
import authActionTypes from './auth.types'

function* doLogin(action) {
  console.log('doLogin: ', action)
}

function* onLogin() {
  yield takeLatest(authActionTypes.LOGIN, doLogin)
}

export default function* authSagas() {
  yield all([
    call(onLogin)
  ])
}