import { combineReducers, applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import itemsReducer from './items';
import userReducer from './user'

const finalReducer = combineReducers({
  user:userReducer,
  items:itemsReducer
});

const middlewares = [thunk];

const store = createStore(finalReducer, applyMiddleware(...middlewares));

export default store;
