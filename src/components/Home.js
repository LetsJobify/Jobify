import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
} from '@chakra-ui/react';
import CalendarComponent from './CalendarComponent';

export default function Home() {
  // Choose between the interview and calendar crumbs.
  const [currentCrumb, setCurrentCrumb] = useState('Interview');
  const handleCrumb = (event) => {
    setCurrentCrumb(event);
  };

  // Used for background colors.
  const { colorMode } = useContext(GlobalStateContext);

  return (
    <div>
      <Breadcrumb ml="5" mt="2" mb="2">
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => handleCrumb('Company')}>
            Company
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => handleCrumb('Upcoming Appointments')}>
            Upcoming Appointments
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider />
      <Center mt="5" ml="5" mr="5" mb="5">
        <CalendarComponent />
      </Center>
      {currentCrumb === 'Company' && (
        <div>Company</div>
      )}
      {currentCrumb === 'Upcoming Appointments' && (
        <div>Upcoming Appointments</div>
      )}
    </div>
  );
}
