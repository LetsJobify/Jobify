import { combineReducers } from 'redux';

import loginStateReducer from './loginStateReducer';

const reducers = combineReducers({
  loginStatus: loginStateReducer,
});

export default reducers;
