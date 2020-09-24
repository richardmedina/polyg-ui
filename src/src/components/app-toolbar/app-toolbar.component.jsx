import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

import AppLogo from 'components/app-logo/app-logo.component'

const AppToolbar = ({ onLogoutClick }) =>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">
      <AppLogo small />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to='/phrases'>Phrases</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
    </Nav>
    <Form inline>
      <Form.Group>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form.Group>
      <Form.Group style={{paddingLeft: '10px'}}>
        <Button variant="warning" onClick={onLogoutClick}>Logout</Button>
      </Form.Group>
    </Form>
  </Navbar>

export default AppToolbar
