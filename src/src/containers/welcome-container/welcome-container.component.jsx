import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import increasing_chart from 'assets/increasing_chart.png'
import './welcome-container.styles.scss'

import AppLogo from 'components/app-logo/app-logo.component'
import AppMenu from 'components/app-menu/app-menu.component'
import LoginForm from 'components/login-form/login-form.component'
import WithModal from 'hoc/with-modal/with-modal.component'

import { login, logout } from 'redux/auth/auth.actions'
import { selectIsLoggedInError, selectIsLoginLoading } from 'redux/auth/auth.selectors'

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
      password: '',
      showError: false
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
    const { logout } = this.props
    
    this.setState(prevState => ({
      ...prevState,
      [key]: {
        ...(show ? { email: '', password: ''} : prevState[key]),
        show: show
      }
    }))

    if (show === false) {
      logout()
    }
  }

  handleLoginSubmit = evt => {
    console.log('Submiting: ', this.state.loginModal)
    const{ email, password } = this.state.loginModal 
    const { login } = this.props
    login (email, password)
    //this.handleModalShow('loginModal', false)
  }

  render (){
    const { loginModal } = this.state
    const {
      isLoggedInError,
      isLoginLoading
    } = this.props
    return (
      <div className='welcome-container'>
        <LoginFormWithModal
          title='Login to Polyg'
          okLabel='Log In'
          cancelLabel='Close'
          errorMessage='Invalid username or password'
          handleChange={this.handleLoginChange}
          handleClose={() => this.handleModalShow('loginModal', false)}
          handleSubmit={this.handleLoginSubmit}
          showError={isLoggedInError}
          showSpinner={isLoginLoading}
          {...loginModal}
        />
        <div className='header'>
          <div className='app-logo'>
            <AppLogo { ...appInfo } />
          </div>
          <div className='app-menu'>
            <AppMenu
              handleLoginClick={() => this.handleModalShow('loginModal', true)}
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

const mapStateToProps = createStructuredSelector ({
  isLoginLoading: selectIsLoginLoading,
  isLoggedInError: selectIsLoggedInError
})
const mapDispatchToProps = dispatch => ({
  login: (userName, password) => dispatch(login(userName, password)),
  logout: () => dispatch(logout())
})

export default
  connect (mapStateToProps, mapDispatchToProps) (WelcomeContainer)
