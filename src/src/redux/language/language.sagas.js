import { takeLatest, all, call } from 'redux-saga/effects' 
import LanguageActionTypes from './language.types'
import {
  languageGetAllSuccess,
  langaugeGetAllFailure
} from './language.actions'

import Api from 'services/Api'

function* languageGetAll(action) {
  try {
    const { data }  = Api.languages.getAll()
    languageGetAllSuccess(data)
  }
  catch(error) {
    langaugeGetAllFailure(error)
  }
}

function* onLanguageGetAll () {
  yield takeLatest(LanguageActionTypes.LANGUAGE_GETALL, languageGetAll)
}

export default function* languageSagas(){
  yield all([
    call(onLanguageGetAll)
  ])
}
