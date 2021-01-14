import React, { useState, useEffect, useContext } from 'react';
import { Center, Spinner } from "@chakra-ui/react"
import { GlobalStateContext } from './App';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './AddEventModal';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const InterviewStateContext = React.createContext();

export default function CalendarComponent() {
  const { currentUserId } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect( async () => {
    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    setIsLoading(true);
    const response = await fetch(`/interview/all/user/${currentUserId}`, request);
    const serverResponse = await response.json();
    

    const responseObj = serverResponse.map(res => {
      console.log(res.iid);
       return { title: `${res.name}. ${res.offer}`, date: res.date.slice(0, 10), id: res.iid };
    })
    
    setCalendarEvents(responseObj);
    setIsLoading(false);

  }, [AddEventModal]);

  // Interview form object state.
  const [ formState, setFormState ] = useState({
    new: true,
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
    accepted: 'false',
    formId: '',
  });

  // Slider in the interview form.
  // const [ sliderValue, setSliderValue ] = useState(0);
  const sliderValue = formState.rating;
  const setSliderValue = (val) => {
    setFormState({ ...formState, rating: val})
  };
  const handleSliderChange = (sliderValue) => {
    setSliderValue(sliderValue);
    setFormState({...formState, rating: sliderValue })
  }

  // These are values used for the offer $ parsing.
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const value = formState.offer;
  const setValue = (val) => {
    setFormState({...formState, offer: val})
  };
  // const [value, setValue] = useState("125,000.00");

  const InterviewStateValues = {
    formState,
    setFormState,
    sliderValue,
    setSliderValue,
    handleSliderChange,
    format,
    parse,
    value,
    setValue,
  };

  // Modal Functionality
  const [showModal, setModal] = useState(false);
  const addModalClose = () => {
    setModal(false);
    setFormState({
      new: true,
      company: '',
      date: '',
      address: '',
      notes: '',
      feedback: '',
      type: '',
      rating: '0',
      interviewer: '',
      faq: '',
      offer: '125,000.00',
      accepted: 'false',
      formId: '',
    });
  };
  const addModalOpen = () => {
    setModal(true);
  };


  return (
    <InterviewStateContext.Provider value={InterviewStateValues}>
      {isLoading ? (
        <Center>
          <Spinner size="xl" className="spinner" />
        </Center>
      ) : (
        <div className="calendar">
          <ButtonToolbar>
            <Button variant="primary" onClick={addModalOpen}>
              New Interview
            </Button>

            <AddEventModal props={calendarEvents, setCalendarEvents} show={showModal} onHide={addModalClose} />
          </ButtonToolbar>
          <Calendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            selectable={true}
            editable={false}
            events={calendarEvents}
            eventClick={ async (info) => {
              const id = info.event.id;
              const request = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
              };
              
              const response = await fetch(`/interview/${id}`, request);
              const data = await response.json();
              
              setFormState({
                new: false,
                company: data['company_id'],
                date: data.date.slice(0, 10),
                address: data.address,
                notes: data.pre_notes,
                feedback: data.feedback,
                type: data.type,
                rating: data.rating,
                interviewer: data.interviewer,
                faq: data.improve,
                offer: data.offer,
                accepted: data.accepted,
                formId: id
              });

              setModal(true);
            }}
          />
        </div>
      )}
    </InterviewStateContext.Provider>
  );
}
