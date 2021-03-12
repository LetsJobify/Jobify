/**
 * ************************************
 *
 * @module  loginStateReducer
 * @author
 * @date
 * @description reducer for user login status
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  loggedIn: false,
};

const loginStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN_USER:
      return {
        loggedIn: true,
      };
  }
};

export default loginStateReducer;
