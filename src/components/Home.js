import React, { useState } from 'react';
import {
  Box,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels
} from '@chakra-ui/react';
import Calendar from './CalendarComponent';

export default function Home() {

  // Show or hide the interview form.
  const [showInterviewForm, setShowInterviewForm] = useState(false);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Interview</Tab>
          <Tab>Calendar</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>

          </TabPanel>
          <TabPanel>
            {/* <Calendar /> */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
