import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import signin from './signin'
import statistics from './statistics'
import settings from './settings'
import claim from './claim'
import account from './account'

export default combineReducers({
    routing: routerReducer,
    signin,
    statistics,
    settings,
    claim,
    account,
})
