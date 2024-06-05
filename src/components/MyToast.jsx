import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

export const MyToast= ({showToast,toggleShowToast,title,body}) => {
  return (
    <ToastContainer position='bottom-start' className='m-4'>
      <Toast show={showToast} onClose={toggleShowToast}>
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
          </Toast.Header>
          <Toast.Body>
          <strong className="me-auto">{body}</strong>
          </Toast.Body>
          
        </Toast>
    </ToastContainer>
  )
}
