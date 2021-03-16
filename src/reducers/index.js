import { combineReducers } from 'redux';

import loginStateReducer from './loginStateReducer';
import pageStateReducer from './pageStateReducer';

const reducers = combineReducers({
  loginStatus: loginStateReducer,
  currentPage: pageStateReducer,
});

export default reducers;
