import React from 'react'

import increasing_chart from 'assets/increasing_chart.png'
import './welcome-container.styles.scss'

import AppLogo from 'components/app-logo/app-logo.component'
import AppMenu from 'components/app-menu/app-menu.component'
import LoginForm from 'components/login-form/login-form.component'
import WithModal from 'hoc/with-modal.component'

const LoginFormWithModal = WithModal(LoginForm)

const appInfo = {
  title: 'Polyg',
  description: 'Just another tool for learning languages'
}


class WelcomeContainer extends React.Component {
  state = {
    loginModal: {
      show: false,
      email: '',
      password: ''
    }
  }

  handleLoginChange = evt => {
    const { name, value } = evt.target
    this.setState(prevState => ({
      ...prevState,
      loginModal: {
        ...prevState.loginModal,
        [name]: value
      }
    }))
  }

  handleModalShow = (key, show) => {
    this.setState(prevState => ({
      ...prevState,
      [key]: {
        ...(show ? { email: '', password: ''} : prevState[key]),
        show: show
      }
    }))
  }

  handleLoginSubmit = evt => {
    console.log('Submiting: ', this.state.loginModal)

    this.handleModalShow('loginModal', false)
  }

  render (){
    return (
      <div className='welcome-container'>
        <LoginFormWithModal
          title='Login'
          okLabel='Log In'
          cancelLabel='Close'
          handleChange={this.handleLoginChange}
          handleClose={() => this.handleModalShow('loginModal', false)}
          handleSubmit={this.handleLoginSubmit}
          {...this.state.loginModal}
        />
        <div className='header'>
          <div className='app-logo'>
            <AppLogo { ...appInfo } />
          </div>
          <div className='app-menu'>
            <AppMenu
              handleLoginClick={() => { this.handleModalShow('loginModal', true)}}
              handleSignupClick={() => {}}
            />
          </div>
        </div>
        <div className='content'>
          <div className='main-message'>
            Get you into a new language and increase your productivity!
          </div>

          <div className='main-image'>
            <img src={increasing_chart} alt='Increasing chart'/>
          </div>
        </div>
      </div>
    )
  } 
}

export default WelcomeContainer
