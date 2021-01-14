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
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal-background'
    >
      <Interview />
      <Button variant="success" onClick={ async () => {
        onHide();

        let methodText;
        if (formState.new === true) methodText = 'POST';
        else methodText = 'PUT';

        // Send a post request
        const request = {
          method: methodText,
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

        let response;
        if (formState.new === true) response = await fetch('/interview', request);
        else response = await fetch(`/interview/${formState.formId}`, request);
        
      }}>
        Submit
      </Button>
    </Modal>
  );
}
