import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/auth.reducer'

const rootReducer = combineReducers({
  authReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer']
}

export default persistReducer(persistConfig, rootReducer)
