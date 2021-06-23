import { combineReducers } from 'redux'
import state from './state'

const hello = (state = null) => state

export default combineReducers({ hello })