import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rockets from './rockets'
import logger from 'redux-logger';

const reducer = combineReducers({
  // reducers go here
  rockets,

})

const store = configureStore({
  reducer,
  middleware: [thunk, logger]
})

export default store;