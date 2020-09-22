import React from 'react'

import increasing_chart from 'assets/increasing_chart.png'
import './welcome-container.styles.scss'

import AppLogo from 'components/app-logo/app-logo.component'
import AppMenu from 'components/app-menu/app-menu.component'

const appInfo = {
  title: 'Polyg',
  description: 'Just another tool for learning languages'
}


class WelcomeContainer extends React.Component {
  render (){
    return (
      
      <div className='welcome-container'>
        <div className='header'>
          <div className='app-logo'>
            <AppLogo { ...appInfo } />
          </div>
          <div className='app-menu'>
            <AppMenu />
          </div>
        </div>
        <div className='content'>
          <div className='main-message'>
            Get you into a new language and increase your productivity!
          </div>

          <div className='main-image'>
            <img src={increasing_chart} />
          </div>
        </div>
      </div>
    )
  } 
}

export default WelcomeContainer
