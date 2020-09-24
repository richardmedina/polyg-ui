import authActionTypes from './auth.types'

const initialState = {
  credentials: {
    token: '',
    expiry: null,
    error: null
  }
}

const authReducer = (state = initialState, action) => {
  console.log('action received: ', action)

  switch(action.type) {
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        credentials: {
          token: action.payload.token,
          expiry: action.payload.expiry,
          error: null
        }
      }
    
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        credentials: {
          token: '',
          expiry: '',
          error: action.payload
        }
      }
    
    case authActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        credentials: {
          token: '',
          expiry: 0,
          error: null
        }
      }
    
    default:
      return state
  }
}

export default authReducer