import React from 'react'
import { connect } from 'react-redux'

import { logout } from 'redux/auth/auth.actions'

import './header.styles.scss'

import AppToolbar from 'components/app-toolbar/app-toolbar.component'

const LayoutHeader = ({ handleLogoutClick }) =>
  <AppToolbar onLogoutClick={handleLogoutClick} />

const mapDispatchToProps = dispatch => ({
  handleLogoutClick: () => dispatch(logout())
})

export default 
  connect(null, mapDispatchToProps) (LayoutHeader)

