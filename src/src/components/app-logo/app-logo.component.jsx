import React from 'react'

import appLogo from 'assets/mycleverapp.png'
import './app-logo.styles.scss'

const AppLogo = ({title, description}) =>
  <div className='app-logo'>
    <img src={appLogo} className='app-logo-img' />
    <div className='app-logo-info'>
      <div className='app-logo-title'>{title}</div>
      <div className='app-logo-description'>{description}</div>
    </div>
  </div>

export default AppLogo
