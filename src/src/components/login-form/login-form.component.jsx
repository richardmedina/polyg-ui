import React from 'react'

import { Form } from 'react-bootstrap'

const LoginForm = ({ email, password, handleChange, showError }) => 
  <Form>
    <Form.Group controlId='login-form-email'>
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type='email'
        name='email'
        placeholder='Enter email'
        value={email}
        onChange={handleChange}
       />
      <Form.Text className='text-muted'>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId='login-form-password'>
      <Form.Label>Password</Form.Label>
      <Form.Control
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Check me out' />
    </Form.Group>
  </Form>

export default LoginForm