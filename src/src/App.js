import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Layout from 'layout/layout.component'
import WelcomeContainer from 'containers/welcome-container/welcome-container.component'

import { selectIsLoggedIn } from 'redux/auth/auth.selectors'

const App = ({ isLogged }) =>
  isLogged
    ? <Layout />
    : <WelcomeContainer />


const mapStateToProps = createStructuredSelector({
  isLogged: selectIsLoggedIn
})

export default
  connect(mapStateToProps)(App)


