import React from 'react'

import Layout from 'layout/layout.component'
import WelcomeContainer from 'containers/welcome-container/welcome-container.component'

const App = ({ isLogged }) =>
  isLogged
    ? <Layout />
    : <WelcomeContainer />

export default App


