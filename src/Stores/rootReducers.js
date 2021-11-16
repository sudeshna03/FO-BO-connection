import { combineReducers } from 'redux';
import blogreducer from './Posts/reducer';

const rootReducer = combineReducers({
  // authentication,
  blog: blogreducer
});

export default rootReducer;
