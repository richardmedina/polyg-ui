import React from 'react'
import { Provider } from 'react-redux'

import Layout from 'layout/layout.component'
import WelcomeContainer from 'containers/welcome-container/welcome-container.component'

import store from 'redux/store'

const App = ({ isLogged }) =>
  <Provider store={store}>
    {
      isLogged
        ? <Layout />
        : <WelcomeContainer />
    }
  </Provider>

export default App


