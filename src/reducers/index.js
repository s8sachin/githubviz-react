import { combineReducers } from 'redux';
import zoom1Reducer from './zoom1Reducer';
import zoom2Reducer from './zoom2Reducer';

export default combineReducers({
  zoom1: zoom1Reducer,
  zoom2: zoom2Reducer
})