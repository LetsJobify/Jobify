import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Interview from './Interview'

export default function AddEventModal(props) {

  // This is the functionalty that hides the popup modal.
  const { onHide } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-background'
    >
      <Interview />
      <Button variant="success" onClick={onHide}>
        Submit
      </Button>
    </Modal>
  );
}
