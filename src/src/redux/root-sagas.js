import { all, call } from 'redux-saga/effects'
import authSagas from './auth/auth.sagas'
import languageSagas from './language/language.sagas'

export default function* () {
  yield all ([
    call(authSagas),
    call()
  ])
}