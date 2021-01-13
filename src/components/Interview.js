import React, { useState, useContext } from 'react';
import { GlobalStateContext } from './App';
import { InterviewStateContext } from './CalendarComponent';

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
  // Import form state defined in Calendar component. (This state needed to be defined upstream because of the submit button inside of the addEventModal)
  const { 
    formState,
    setFormState,
    sliderValue,
    setSliderValue,
    handleSliderChange,
    format,
    parse,
    value,
    setValue
   } = useContext(InterviewStateContext);

  // Show or hide the post interview form.
  const [ formVisibility, setFormVisibility ] = useState(false);

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
      mb="6"
    >
      <div className='two_items'>
        <span>
          <Text mb="1">Company</Text>
          <Select 
            w="16vw"
            placeholder="Select"
            onChange={(e) => setFormState({...formState, company: e.target.value })}
          >
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
            <option value="Facebook">Facebook</option>
            <option value="Netflix">Netflix</option>
          </Select>
        </span>
        <span>
          <Text mb="1">Date</Text>
          <Input 
          w="16vw" 
          onChange={(e) => setFormState({...formState, date: e.target.value })}
          />
        </span>
      </div>
      <div className='one_item'>
        <span>
          <Text mt="4">Company Address</Text>
          <Input 
            variant="flushed"
            size="lg"
            w="30vw"
            onChange={(e) => setFormState({...formState, address: e.target.value })}
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
            onChange={(e) => setFormState({...formState, notes: e.target.value })}
          />
        </span>
      </div>
      {formVisibility ? (
      <div>
        <div className='one_item'>
          <Button 
            mt="2" 
            mb="2"
            onClick={() => setFormVisibility(!formVisibility)}
            size="xs"
            w="30vw"
          >
            Hide Post Interview</Button>
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
              onChange={(e) => setFormState({...formState, feedback: e.target.value })}
            />
          </span>
        </div>
        <div className='three_items'>
          <span>
            <Text mb="1">Type</Text>
            <Select 
              w="8vw"
              placeholder="Select"
              onChange={(e) => setFormState({...formState, type: e.target.value })}
            >
              <option value="Behavioral">Behavioral</option>
              <option value="Technical">Technical</option>
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
              onChange={(e) => setFormState({...formState, interviewer: e.target.value })}
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
              onChange={(e) => setFormState({...formState, faq: e.target.value })}
            />
          </span>
        </div>
        <div className='two_items'>
          <span>
            <Text mb="1">Offer Amount</Text>
            <NumberInput 
              w="16vh" 
              onChange={(valueString) => {
                setValue(parse(valueString))
                setFormState({...formState, offer: parse(valueString) })
              }}
              value={format(value)}
              min={0}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </span>
          <span>
            <Text mb="1">Accepted Offer?</Text>
            <Select 
              w="16vw"
              placeholder="Select"
              onChange={(e) => setFormState({...formState, accepted: e.target.value })}
            >
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
      </div>
      ) : (
      <div className='one_item'>
        <Button 
          mt="2" 
          mb="2"
          onClick={() => setFormVisibility(!formVisibility)}
          size="xs"
          w="30vw"
        >
          Show Post Interview</Button>
      </div>
      )}
    </Container>
  )
}
