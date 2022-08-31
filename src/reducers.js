import { combineReducers } from 'redux'


const hello = (state = null) => state
const cars = (state = [] ) => state
const user = (state = null) => state


export default combineReducers({ hello, cars, user})

// !Rules 
// * all properties on state have a reducers!!!!!
// * all reducers get exported in the combineReducers object
// * all reducers must return state 