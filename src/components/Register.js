import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons';

export default function Register() {
  // Importing color mode for day/night logic.
  const { colorMode } = useContext(GlobalStateContext);

  // Local state to show password values.
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div>
      <Box
        bg={`${colorMode}.500`}
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<EmailIcon />} />
          <Input placeholder="Enter email address" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<UnlockIcon />} />
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center mt="3" mb="3">
          <Button variant="outline" height="48px" width="200px">
            Submit
          </Button>
        </Center>
      </Box>
    </div>
  );
}
