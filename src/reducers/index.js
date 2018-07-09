import { combineReducers } from 'redux';
import zoom1Reducer from './zoom1Reducer';
import zoom2Reducer from './zoom2Reducer';
import zoom3Reducer from './zoom3Reducer';
import imdbReducer from './imdbReducer';

export default combineReducers({
  zoom1: zoom1Reducer,
  zoom2: zoom2Reducer,
  zoom3: zoom3Reducer,
  imdb: imdbReducer,
})