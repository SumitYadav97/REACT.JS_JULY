import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RB_Modals_() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button variant="primary" onClick={handleShow} className='d-flex'>
        Subscribe
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dont miss out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Signup for our newsletter to stay upto date.</Form.Label>
              <InputGroup style={{ width: "450px" }}>

                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />

                <Button variant="outline-secondary">
                  Subscribe
                </Button>

              </InputGroup>

            </Form.Group>

          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default RB_Modals_;