import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'

export const OffCanvas = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {/* This is content within an <code>.offcanvas-lg</code>. */}
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
