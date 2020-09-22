import React from 'react'
import { Button } from 'react-bootstrap'
import './app-menu.styles.scss'

const AppMenu = () =>
  <div className='app-menu'>
    <Button className='app-menu-item' variant='outline-success'>Login</Button>
    <Button className='app-menu-item' variant='success'>Signup</Button>
  </div>

export default AppMenu