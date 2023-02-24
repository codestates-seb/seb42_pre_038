import { combineReducers } from 'redux';
import loginInfoReducer from './reducers';

const rootReducer = combineReducers({
  loginInfoReducer,
});

export default rootReducer;
