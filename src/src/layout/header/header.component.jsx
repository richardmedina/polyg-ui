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

const LayoutHeader = () =>
  <>
  <div>
    <div className='brand-container'>
      <AppLogo title="Polyg" description="Just another app for learning languages"/>
      <div className='app-menu'>
        <AppMenu />
      </div>
    </div>
  </div>
  <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Phrases</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  </>

export default LayoutHeader

