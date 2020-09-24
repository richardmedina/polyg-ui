import authActionTypes from './auth.types'

export const login = (userName, password) => ({
  type: authActionTypes.LOGIN,
  payload: {
    userName,
    password
  }
})

export const loginSuccess = payload => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: payload
})

export const loginFailure = payload => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: payload
})

export const logout = () => ({
  type: authActionTypes.LOGOUT
})

export const logoutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS
})