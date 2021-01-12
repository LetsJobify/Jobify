import React, { useState } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
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

  return (
    <div>
      <Breadcrumb ml="5" mt="2" mb="2">
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => handleCrumb('Interview')}>
            Interviews
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => handleCrumb('Calendar')}>
            Calendar
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider />
      {currentCrumb === 'Interview' && (
        <div>
          <Button>Interview</Button>
        </div>
      )}
      {currentCrumb === 'Calendar' && (
        <Center mt="5" ml="5" mr="5" mb="5">
          <CalendarComponent />
        </Center>
      )}
    </div>
  );
}
