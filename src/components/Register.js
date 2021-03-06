import React, { useState, useContext } from 'react';
import { loginUser, logoutUser } from '../actions/actions';
import { useDispatch } from 'react-redux';
import { GlobalStateContext } from './App';
import {
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons';

export default function Register() {
  const dispatch = useDispatch();
  const { colorMode, setCurrentUser, setCurrentUserId } = useContext(
    GlobalStateContext
  );
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [currentUserWindow, setWindow] = useState(true);
  const handleWindow = () => setWindow(!currentUserWindow);
  const [registerState, setRegisterState] = useState({
    firstName: '',
    lastName: '',
    registerEmail: '',
    registerPassword: '',
  });
  const [loginState, setLoginState] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleRegister = async (event) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: '',
        first_name: registerState.firstName,
        last_name: registerState.lastName,
        email: registerState.registerEmail,
        password: registerState.registerPassword,
      }),
    };

    setIsLoading(true);
    const response = await fetch('/user/', request);
    const serverResponse = await response.json();

    if (serverResponse['success'] === true) {
      setCurrentUser(registerState.registerEmail);
      setCurrentUserId(serverResponse.__id);
      dispatch(loginUser());
    } else {
      dispatch(logoutUser());
    }
    setRegisterState({
      ...registerState,
      avatar: '',
      firstName: '',
      lastName: '',
      registerEmail: '',
      registerPassword: '',
    });
    setIsLoading(false);
  };

  // When a login form is submitted.
  const handleLogin = async (event) => {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginState.loginEmail,
        password: loginState.loginPassword,
      }),
    };

    // We are loading now.
    setIsLoading(true);
    // Send a request to the server.
    const response = await fetch('/user/login', request);
    const serverResponse = await response.json();
    console.log(serverResponse);
    // If successful new user.
    if (serverResponse.success === true) {
      // "Log in" to the database.
      setCurrentUser(loginState.loginEmail);
      setCurrentUserId(serverResponse.__id);
      dispatch(loginUser());
    } else {
      dispatch(logoutUser());
    }
    // Reset state values after login.
    setLoginState({ ...loginState, loginEmail: '', loginPassword: '' });
    setIsLoading(false);
  };
  return (
    <div>
      {colorMode === 'dark' ? (
        <>
          <a className='jobify'>
            <img
              src='https://i.ibb.co/wccm8rn/jobify-logo.png'
              alt='jobify-logo'
              border='0'
            />
          </a>
        </>
      ) : (
        <>
          <a className='jobify'>
            <img
              src='https://i.ibb.co/BC3J017/jobify-logo.png'
              alt='jobify-logo'
              border='0'
            />
          </a>
        </>
      )}

      {isLoading ? (
        <Center>
          <Spinner size='xl' className='spinner' />
        </Center>
      ) : (
        <div className='__register--Login'>
          <div>
            {currentUserWindow ? (
              // This is JSX that renders the register component.
              <div>
                <Box
                  bg={`${colorMode}.100`}
                  maxW='lg'
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                  pt='4'
                  pr='4'
                  pb='4'
                  pl='4'
                >
                  <InputGroup>
                    <Input
                      focusBorderColor='grey'
                      placeholder='Enter first name'
                      value={registerState.firstName}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          firstName: e.target.value,
                        })
                      }
                    />
                    <Input
                      focusBorderColor='grey'
                      placeholder='Enter last name'
                      value={registerState.lastName}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<EmailIcon />}
                    />
                    <Input
                      focusBorderColor='grey'
                      placeholder='Enter email address'
                      value={registerState.registerEmail}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          registerEmail: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<UnlockIcon />}
                    />
                    <Input
                      focusBorderColor='grey'
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      value={registerState.registerPassword}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          registerPassword: e.target.value,
                        })
                      }
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Center mt='3' mb='3'>
                    <Button
                      variant='outline'
                      height='48px'
                      width='200px'
                      onClick={handleRegister}
                    >
                      Register
                    </Button>
                  </Center>
                  <Button size='xs' mt='2' onClick={handleWindow}>
                    Log in instead?
                  </Button>
                </Box>
              </div>
            ) : (
              // This is JSX that renders the login component.
              <div>
                <Box
                  bg={`${colorMode}.400`}
                  maxW='lg'
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                  pt='4'
                  pr='4'
                  pb='4'
                  pl='4'
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<EmailIcon />}
                    />
                    <Input
                      placeholder='Enter email address'
                      value={loginState.loginEmail}
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          loginEmail: e.target.value,
                        })
                      }
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      children={<UnlockIcon />}
                    />
                    <Input
                      pr='4.5rem'
                      type={show ? 'text' : 'password'}
                      placeholder='Enter password'
                      value={loginState.loginPassword}
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          loginPassword: e.target.value,
                        })
                      }
                    />
                    <InputRightElement width='4.5rem'>
                      <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Center mt='3' mb='3'>
                    <Button
                      variant='outline'
                      height='48px'
                      width='200px'
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Center>
                  <Button size='xs' mt='2' onClick={handleWindow}>
                    Register instead?
                  </Button>
                </Box>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
