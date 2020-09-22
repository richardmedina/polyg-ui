import React from 'react'
import { Button } from 'react-bootstrap'
import './app-menu.styles.scss'

const AppMenu = ({ handleLoginClick, handleSignupClick }) =>
  <div className='app-menu'>
    <Button onClick={handleLoginClick} className='app-menu-item' variant='outline-success'>Login</Button>
    <Button onClick={handleSignupClick} className='app-menu-item' variant='success'>Signup</Button>
  </div>

export default AppMenu