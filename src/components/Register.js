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
  Spinner,
} from '@chakra-ui/react';

// Import icons to use in the form. (Looks pretty).
import { EmailIcon, UnlockIcon } from '@chakra-ui/icons';

export default function Register() {
  // Importing color mode for day/night logic. setLogin defines if logged in. We need to know current user.
  const { colorMode, setLogin, currentUser, setCurrentUser, currentUserId, setCurrentUserId } = useContext(GlobalStateContext);

  // Set up "loading" state.
  const [isLoading, setIsLoading] = useState(false);

  // Local state to show password values.
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // Local state to define whether the register or login component appears.
  // True = register.
  // False = login.
  const [currentUserWindow, setWindow] = useState(true);
  const handleWindow = () => setWindow(!currentUserWindow);

  // Register object state.
  const [registerState, setRegisterState] = useState({
    firstName: '',
    lastName: '',
    registerEmail: '',
    registerPassword: '',
  });

  // Login object state. * Do not confuse with setLogin - setLogin is for authorization.
  const [loginState, setLoginState] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  // When a register button is submitted.
  const handleRegister = async (event) => {
    // Pass values in state into the request body.
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

    // We are loading now.
    setIsLoading(true);
    // Send a request to the server.
    const response = await fetch('/user/', request);
    const serverResponse = await response.json();

    // If successful new user.
    if (serverResponse['success'] === true) {
      // "Log in" to the database.
      setCurrentUser(registerState.registerEmail);
      setCurrentUserId(serverResponse.__id);
      setLogin(true);
    
    } else {
      setLogin(false);

    }
    // Reset state values after login.
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
      setLogin(true);
    } else {
      setLogin(false);
    }
    // Reset state values after login.
    setLoginState({ ...loginState, loginEmail: '', loginPassword: '' });
    setIsLoading(false);
  };
  return (
    <div>
      {colorMode === 'dark' ? (
      <>
        <a className="jobify">
        <img
          src="https://i.ibb.co/wccm8rn/jobify-logo.png"
          alt="jobify-logo"
          border="0"
        />
        </a>
      </>
      ) : (
      <>
        <a className="jobify">
        <img
          src="https://i.ibb.co/BC3J017/jobify-logo.png"
          alt="jobify-logo"
          border="0"
        />
        </a>
      </>
      )}

      {isLoading ? (
        <Center>
          <Spinner size="xl" className="spinner" />
        </Center>
      ) : (
        <div className="__register--Login">
          <div>
            {currentUserWindow ? (
              // This is JSX that renders the register component.
              <div>
                <Box
                  bg={`${colorMode}.100`}
                  maxW="lg"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  pt="4"
                  pr="4"
                  pb="4"
                  pl="4"
                >
                  <InputGroup>
                    <Input
                      focusBorderColor="grey"
                      placeholder="Enter first name"
                      value={registerState.firstName}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          firstName: e.target.value,
                        })
                      }
                    />
                    <Input
                      focusBorderColor="grey"
                      placeholder="Enter last name"
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
                      pointerEvents="none"
                      children={<EmailIcon />}
                    />
                    <Input
                      focusBorderColor="grey"
                      placeholder="Enter email address"
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
                      pointerEvents="none"
                      children={<UnlockIcon />}
                    />
                    <Input
                      focusBorderColor="grey"
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={registerState.registerPassword}
                      onChange={(e) =>
                        setRegisterState({
                          ...registerState,
                          registerPassword: e.target.value,
                        })
                      }
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Center mt="3" mb="3">
                    <Button
                      variant="outline"
                      height="48px"
                      width="200px"
                      onClick={handleRegister}
                    >
                      Register
                    </Button>
                  </Center>
                  <Button size="xs" mt="2" onClick={handleWindow}>
                    Log in instead?
                  </Button>
                </Box>
              </div>
            ) : (
              // This is JSX that renders the login component.
              <div>
                <Box
                  bg={`${colorMode}.400`}
                  maxW="lg"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  pt="4"
                  pr="4"
                  pb="4"
                  pl="4"
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<EmailIcon />}
                    />
                    <Input
                      placeholder="Enter email address"
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
                      pointerEvents="none"
                      children={<UnlockIcon />}
                    />
                    <Input
                      pr="4.5rem"
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={loginState.loginPassword}
                      onChange={(e) =>
                        setLoginState({
                          ...loginState,
                          loginPassword: e.target.value,
                        })
                      }
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Center mt="3" mb="3">
                    <Button
                      variant="outline"
                      height="48px"
                      width="200px"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </Center>
                  <Button size="xs" mt="2" onClick={handleWindow}>
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
