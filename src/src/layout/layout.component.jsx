import React from 'react'

import AppLogo from 'components/app-logo/app-logo.component'
import Header from 'layout/header/header.component'
import Content from 'layout/content/content.component'

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default Layout