import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export default function AddEventModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add to Schedule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            <label>
              Date:
              <input type="text" id="start" name="date" />
            </label>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button varient="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
