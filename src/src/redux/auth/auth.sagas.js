import { put, takeLatest, all, call } from 'redux-saga/effects'
import authActionTypes from './auth.types'

import Api from 'services/Api'

function* doLogin(action) {
  const {
    userName,
    password
  } = action.payload

  try {
    const { data } = yield Api.auth.post(userName, password)
    console.log('Data: ', data)
  }
  catch(error) {
    console.log('Error: ', error)
  }
}

function* onLogin() {
  yield takeLatest(authActionTypes.LOGIN, doLogin)
}

export default function* authSagas() {
  yield all([
    call(onLogin)
  ])
}