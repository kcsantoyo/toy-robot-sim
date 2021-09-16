import { combineReducers } from 'redux';
import robotReducer from './robotReducer.js';
import pageReducer from './pageReducer.js';

const allReducers = combineReducers({
  robot: robotReducer,
  page: pageReducer,
})

export default allReducers;
