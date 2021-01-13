import React, { useState } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './AddEventModal';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InterviewStateContext = React.createContext();

export default function CalendarComponent() {


  // Interview form object state.
  const [ formState, setFormState ] = useState({
    company: '',
    date: '',
    address: '',
    notes: '',
    feedback: '',
    type: '',
    rating: 0,
    interviewer: '',
    faq: '',
    offer: '125,000.00',
    accepted: ''
  });

  // Slider in the interview form.
  const [ sliderValue, setSliderValue ] = useState(0);
  const handleSliderChange = (sliderValue) => {
    setSliderValue(sliderValue);
    setFormState({...formState, rating: sliderValue })
  }

  // These are values used for the offer $ parsing.
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const [value, setValue] = useState("125,000.00");

  const InterviewStateValues = {
    formState,
    setFormState,
    sliderValue,
    setSliderValue,
    handleSliderChange,
    format,
    parse,
    value,
    setValue
  };

  // Modal Functionality
  const [showModal, setModal] = useState(false);
  const addModalClose = () => {
    setModal(false);
  };
  const addModalOpen = () => {
    setModal(true);
  };

  const [calendarEvents, setCalendarEvents] = useState([
    { title: 'Interview', date: '2021-01-12'}
  ]);

  return (
    <InterviewStateContext.Provider value={InterviewStateValues}>
      <div className="calendar">
        <ButtonToolbar>
          <Button variant="primary" onClick={addModalOpen}>
            New Interview
          </Button>

          <AddEventModal show={showModal} onHide={addModalClose} />
        </ButtonToolbar>
        <Calendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          selectable={false}
          editable={false}
          events={calendarEvents}
        />
      </div>
    </InterviewStateContext.Provider>
  );
}
