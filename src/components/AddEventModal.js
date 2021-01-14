import React, { useContext } from 'react';
import { InterviewStateContext } from './CalendarComponent';
import { GlobalStateContext } from './App';
import { Modal, Button } from 'react-bootstrap';
import Interview from './Interview'

export default function AddEventModal(props) {

  // This is the functionalty that hides the popup modal.
  const { onHide, setCalendarEvents } = props;

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

   const { currentUser, currentUserId } = useContext(GlobalStateContext);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-background'
    >
      <Interview />
      <Button variant="success" onClick={ async () => {
        onHide();

        // Send a post request
        const request = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: currentUserId,
            company_id: formState.company,
            date: formState.date,
            rating: formState.rating,
            type: formState.type,
            interviewer: formState.interviewer,
            address: formState.address,
            offer: formState.offer,
            pre_notes: formState.notes,
            feedback: formState.feedback,
            improve: formState.feedback,
            questions: formState.faq,
            accepted: formState.accepted,
          })
        };
        const response = await fetch('/interview', request);
      }}>
        Submit
      </Button>
    </Modal>
  );
}
