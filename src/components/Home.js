import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Container,
  Center,
  Divider,
} from '@chakra-ui/react';
import CalendarComponent from './CalendarComponent';
import Interview from './Interview';

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
      {currentCrumb === 'Interview' && 
        <div className='__interview--page'>
          <Interview />
          <Container
            bg={`${colorMode}.500`}
            maxW="18vw"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            pt="4"
            pr="4"
            pb="4"
            pl="4"
            mt="6"
            mr="6"
          >
            <Center mb="2">Company</Center>
            <Divider />
          </Container>
        </div>
      }
      {currentCrumb === 'Calendar' && (
        <Center mt="5" ml="5" mr="5" mb="5">
          <CalendarComponent />
        </Center>
      )}
    </div>
  );
}
