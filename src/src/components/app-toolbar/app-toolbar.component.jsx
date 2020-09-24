import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

import AppLogo from 'components/app-logo/app-logo.component'

const AppToolbar = () =>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <AppLogo small />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Phrases</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    <Form inline>
      <Form.Group>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form.Group>
      <Form.Group style={{paddingLeft: '10px'}}>
        <Button variant="warning">Logout</Button>
      </Form.Group>
    </Form>
  </Navbar>

export default AppToolbar
