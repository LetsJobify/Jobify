import React from 'react'
import { FullCalendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import listPlugin from '@fullcalendar/list';

// let calendar = new Calendar(calendarEl, {
//     plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ]
//   });

//   useEffect(() => {
//       Calendar.render()
//   },[]);

export default function CalendarComponent() {
  return (
    <div>
        <FullCalendar
        defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
        
        />
    </div>
  )
}
