import { createStore, combineReducers } from 'redux';
import counterReducer from './CounterFeatures/reducer';

// let rootReducers = combineReducers({
//   counter: counterReducer,
// });

let store = createStore(counterReducer);
export default store;
