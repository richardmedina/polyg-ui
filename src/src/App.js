import React from 'react'
import { connect } from 'react-redux'

import Layout from 'layout/layout.component'
import WelcomeContainer from 'containers/welcome-container/welcome-container.component'

import { login } from 'redux/auth/auth.actions'

const App = ({ isLogged }) =>
  isLogged
    ? <Layout />
    : <WelcomeContainer />


const mapStateToProps = state => ({
  isLogged: state.authReducer.token !== ''
})

export default
  connect(mapStateToProps)(App)


