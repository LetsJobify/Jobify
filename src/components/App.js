import React, { useState } from 'react';
import { 
  Button,
  useColorMode,
 } from '@chakra-ui/react';
 import {
   MoonIcon,
   SunIcon
 } from '@chakra-ui/icons';

export default function App() {

    // Importing Light and Dark mode for application.
    const { colorMode, toggleColorMode } = useColorMode();


  return (
    <div>
      <Button 
        onClick={toggleColorMode}
        className='offset'
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  )
}
