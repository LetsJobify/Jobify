import React, { useContext } from 'react';
import { InterviewStateContext } from './CalendarComponent';
import { Modal, Button } from 'react-bootstrap';
import Interview from './Interview'

export default function AddEventModal(props) {

  // This is the functionalty that hides the popup modal.
  const { onHide } = props;

  const { 
    formState,
    setFormState,
    sliderValue,
    setSliderValue,
    handleSliderChange,
    format,
    parse,
    value,
    setValue
   } = useContext(InterviewStateContext);

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
