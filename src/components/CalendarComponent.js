import React, { useState, Component } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import AddEventModal from './AddEventModal';
import { Button, ButtonToolbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

// import listPlugin from '@fullcalendar/list';
export default function CalendarComponent() {
  const [showModal, setModal] = useState(false);
  const addModalClose = () => {
    setModal(false);
  };
  const addModalOpen = () => {
    setModal(true);
  };
  return (
    <div className="calendar">
      <ButtonToolbar>
        <Button variant="primary" onClick={addModalOpen}>
          Add Date
        </Button>

        <AddEventModal show={showModal} onHide={addModalClose} />
      </ButtonToolbar>
      <Calendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        selectable={true}
        editable={true}
      />
    </div>
  );
}
