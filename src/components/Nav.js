import React, { useState } from 'react';
import { 
  Box,
  Button,
  useColorMode,
 } from '@chakra-ui/react';
 import {
   MoonIcon,
   SunIcon
 } from '@chakra-ui/icons';

export default function Nav() {

  // Importing Light and Dark mode for application.
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Box 
      bg={`${colorMode}.200`}
      pb='2'
    >
      <Button 
        onClick={toggleColorMode}
        className=''
        mt='2'
        ml='2'
      >
        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </Box>
  )
}
