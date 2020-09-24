import authActionTypes from './auth.types'

const initialState = {
  token: '',
  expiry: null,
}

const authReducer = (state = initialState, action) => {
  console.log('action received: ', action)

  switch(action.type) {
    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        expiry: action.payload.expiry
      } 
  }

  return state
}

export default authReducer