import React, { useState } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
// needed for dayClick

export default function CalendarComponent() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  return (
    <div className="calendar">
      <Calendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        weekends={true}
        events={[
          { title: 'event 1', date: '2021-01-10' },
          { title: 'event 2', date: '2021-01-12' },
          { title: 'event 3', date: '2021-01-10' },
        ]}
      />
    </div>
  );
}
