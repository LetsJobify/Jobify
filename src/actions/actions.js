/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const loginUser = () => ({
  type: types.LOG_IN_USER,
});

export const logoutUser = () => ({
  type: types.LOG_OUT_USER,
});

export const switchPage = (payload) => ({
  type: types.SWITCH_PAGE,
  payload,
});
