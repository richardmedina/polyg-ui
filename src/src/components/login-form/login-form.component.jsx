import React from 'react'

import {
  Form,
  Button
} from 'react-bootstrap'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  render(){
    return (
      <Form>
        <Form.Group controlId="login-form-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="login-form-password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="button">
          Log In
        </Button>
      </Form>
    )
  }
}

export default LoginForm