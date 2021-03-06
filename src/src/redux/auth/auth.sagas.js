import { put, takeLatest, all, call } from 'redux-saga/effects'
import authActionTypes from './auth.types'
import Api from 'services/Api'

import {
  loginSuccess,
  loginFailure,
  logoutSuccess
} from './auth.actions'

function* login(action) {
  const {
    userName,
    password
  } = action.payload

  try {
    const { data } = yield Api.auth.post(userName, password)
    yield put(loginSuccess(data))
  }
  catch(error) {
    //console.log('Error: ', error)
    yield put(loginFailure(error))
  }
}

function* logout () {
  yield put(logoutSuccess())
}

function* onLogin() {
  yield takeLatest(authActionTypes.LOGIN, login)
}

function* onLogout() {
  yield takeLatest(authActionTypes.LOGOUT, logout)
}

export default function* authSagas() {
  yield all([
    call(onLogin),
    call(onLogout)
  ])
}