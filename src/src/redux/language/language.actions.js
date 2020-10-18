import LanguageActionTypes from './language.types'

export const languageGetAll = () => ({
  type: LanguageActionTypes.LANGUAGE_GETALL
})

export const languageGetAllSuccess = languages => ({
  type: LanguageActionTypes.LANGAUGE_GETALL_SUCCESS,
  payload: {
    languages
  }
})

export const langaugeGetAllFailure = error => ({
  type: LanguageActionTypes.LANGUAGE_GETALL_FAILURE,
  payload: {
    error
  }
})