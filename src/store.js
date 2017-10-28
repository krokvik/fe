import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import { apiMiddleware } from 'redux-api-middleware'
import apiAuth from './middleware/api-auth'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware()

const initialState = {}
const enhancers = []
const middleware = [
    apiAuth,
    apiMiddleware,
    thunk,
    routerMiddleware(history),
    sagaMiddleware
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)

sagaMiddleware.run(rootSaga)

export default store
