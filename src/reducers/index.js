import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import signin from './signin'

export default combineReducers({
    routing: routerReducer,
    signin
})