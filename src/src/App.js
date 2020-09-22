import React from 'react'
import { Provider } from 'react-redux'

import Layout from 'layout/layout.component'
import WelcomeContainer from 'containers/welcome-container/welcome-container.component'

import store from 'redux/store'

import { login } from 'redux/auth/auth.actions'
store.dispatch(login(1, 2))

const App = ({ isLogged }) =>
  <Provider store={store}>
    {
      isLogged
        ? <Layout />
        : <WelcomeContainer />
    }
  </Provider>

export default App


