import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import rockets from './rockets'

const reducer = combineReducers({
  // reducers go here
  rockets,

})

const store = configureStore({
  reducer,
})

export default store;