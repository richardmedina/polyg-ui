import authActionTypes from './auth.types'

export const login = (userName, password) => ({
  type: authActionTypes.LOGIN,
  payload: {
    userName,
    password
  }
})

export const loginSuccess = (token, expiry) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    expiry
  }
})

export const loginFailure = (error) => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: error
})