import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  // reducers go here
})

const store = configureStore({
  reducer,
})

export default store;