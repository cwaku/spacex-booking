/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './rockets';
import missions from './missions';

const reducer = combineReducers({
  // reducers go here
  rockets,
  missions,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
