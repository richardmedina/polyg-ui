import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

import './header.styles.scss'

import AppLogo from 'components/app-logo/app-logo.component'
import AppMenu from 'components/app-menu/app-menu.component'
import AppToolbar from 'components/app-toolbar/app-toolbar.component'


const appInfo = {
  title: 'Polyg',
  description: 'Just another tool for learning languages'
}
const LayoutHeader = ({ isLogged = false }) =>
  <AppToolbar />

export default LayoutHeader

