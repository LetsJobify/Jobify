import React, { useState, useContext, useEffect } from 'react';
import { GlobalStateContext } from './App';
import { InterviewStateContext } from './CalendarComponent';
const Quote = require('inspirational-quotes');

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

  const [ options, setOptions ] = useState([]);

  const [textVal, setTextVal] = useState('');
  const [authorVal, setAuthorVal] = useState('');

  useEffect( async () => {
    setTextVal(Quote.getQuote().text);
    setAuthorVal(Quote.getQuote().author);


    const request = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch('/company', request);
    const serverResponse = await response.json();
    const comps = [];

    serverResponse.forEach(company => {
      comps.push({id: company.__id, name: company.name})
    });
    setOptions(comps);

  }, [])

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
    >
      <div className='two_items'>
        <span>
          <Text mb="1">Company</Text>
          <Select 
            w="16vw"
            placeholder="Select"
            onChange={(e) => setFormState({...formState, company: e.target.value })}
            value={formState.company}
          >
            {options.map(el => {
              return <option key={el.id} value={el.id}>{el.name}</option>
            })}
          </Select>
        </span>
        <span>
          <Text mb="1">Date</Text>
          <Input 
          w="16vw" 
          placeholder="yyyy-mm-dd"
          onChange={(e) => setFormState({...formState, date: e.target.value })}
          value={formState.date}
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
            value={formState.value}
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
            value={formState.notes}
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
              value={formState.feedback}
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
              value={formState.type}
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
              w="9vw"
              onChange={(e) => setFormState({...formState, interviewer: e.target.value })}
              value={formState.interviewer}
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
              value={formState.faq}
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
              value={formState.accepted}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </Select>
          </span>
        </div>
        <div className='one_item'>
          <Box w='28vw'>
            <Flex direction="column">
              <Text fontSize="sm" mt="2" >{textVal}</Text>
              <Text fontSize="xs" mb="5" className='italy' align='end'>- {authorVal}</Text>
            </Flex>
          </Box>
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
