/**
 * ************************************
 *
 * @module  pageStateReducer
 * @author
 * @date
 * @description reducer for current user page
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialPage = 'Home';

const pageStateReducer = (state = initialPage, action) => {
  switch (action.type) {
    case types.SWITCH_PAGE:
      return {
        loggedIn: true,
      };
    default:
      return state;
  }
};
