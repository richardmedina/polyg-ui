import React from 'react'
import {
  Modal,
  Button
} from 'react-bootstrap'

const WithModal = WrappedComponent => (
  {
    show = true,
    title = '',
    okLabel = 'Ok Label',
    cancelLabel = 'Cancel Label',
    handleSubmit = () => {},
    handleClose = () => {},
    handleChange = () => {}, 
    ...props
  }) =>
  <>
    { show && <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WrappedComponent handleChange={handleChange} {...props} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancelLabel}
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {okLabel}
        </Button>
      </Modal.Footer>
    </Modal>
    }
  </>

export default WithModal