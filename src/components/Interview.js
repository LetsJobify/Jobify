import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';

import {
  Box,
  Container,
  Button,
  Center,
  Divider,
  Input,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Textarea
} from '@chakra-ui/react';

export default function Interview() {

  // Used for background colors.
  const { colorMode } = useContext(GlobalStateContext);

  // Slider in the interview form.
  const [ sliderValue, setSliderValue ] = useState(0);
  const handleSliderChange = (sliderValue) => setSliderValue(sliderValue);

  return (
    <Container 
      bg={`${colorMode}.500`}
      maxW="38vw"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      pt="4"
      pr="4"
      pb="4"
      pl="4"
      mt="6"
    >
      <div className='two_items'>
        <span>
          <Text mb="1">Company</Text>
          <Select w="16vw">
            <option value="google">Google</option>
          </Select>
        </span>
        <span>
          <Text mb="1">Date</Text>
          <Input w="16vw" />
        </span>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="4">Company Address</Text>
          <Input 
            variant="flushed"
            size="lg"
            w="30vw"
          />
        </span>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="3">Notes</Text>
          <Textarea 
            mt="1"
            placeholder="Things to brush up on / goals / notes..."
            resize="none"
            w="30vw"
            h="12vh"
          />
        </span>
      </div>
      <div className='one_item'>
        <Text mt="2" mb="2">Post Interview</Text>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="3">Feedback from Interview</Text>
          <Textarea 
            mt="1"
            mb="3"
            placeholder="Enter feedback here..."
            resize="none"
            w="30vw"
            h="6vh"
          />
        </span>
      </div>
      <div className='three_items'>
        <span>
          <Text mb="1">Type</Text>
          <Select w="8vw">
            <option value="behavioral">Behavioral</option>
            <option value="technical">Technical</option>
          </Select>
        </span>
        <span>
          <Text mb="1">Rating</Text>
          <Flex>
            <NumberInput maxW="75px" mr="2rem" min="0" max="100" value={sliderValue} onChange={handleSliderChange}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider flex="1" w="5vw" value={sliderValue} onChange={handleSliderChange}>
              <SliderTrack >
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="24px" children={sliderValue} />
            </Slider>
          </Flex>
        </span>
        <span>
          <Text>Interviewer</Text>
          <Input 
            size="lg"
            w="12vw"
          />
        </span>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="3">Questions Asked on Interview</Text>
          <Textarea 
            mt="1"
            mb="3"
            placeholder="Enter any questions asked on the interview here..."
            resize="none"
            w="30vw"
            h="6vh"
          />
        </span>
      </div>
      <div className='two_items'>
        <span>
          <Text mb="1">Offer Amount</Text>
          <NumberInput allowMouseWheel w="16vh" defaultValue={80000} min={0}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </span>
        <span>
          <Text mb="1">Accepted Offer?</Text>
          <Select w="16vw">
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Select>
        </span>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="2" mb="5">Fool me once, shame on... shame on you. Fool me—you can't get fooled again.</Text>
        </span>
      </div>
      <div className='two_buttons'>
        <Button colorScheme="red">
          Delete
        </Button>
        <Button colorScheme="green">
          Save/Confirm
        </Button>
      </div>
    </Container>
  )
}
