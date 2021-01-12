import React, { useState } from 'react';
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Lorem,
} from '@chakra-ui/react';

export default function CalendarComponent() {
  // needed for dayClick
  const [date, setDate] = useState('');

  // event.dateStr;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="calendar">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
        </ModalContent>
      </Modal>{' '}
      <Calendar
        plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
        dateClick={onOpen}
        initialView="dayGridMonth"
        weekends={true}
        selectable={true}
        editable={true}
        selectHelper={true}
        events={[
          { title: 'event 1', date: '2021-01-10' },
          { title: 'event 2', date: '2021-01-12' },
          { title: 'event 3', date: '2021-01-10' },
        ]}
      />
    </div>
  );
}
