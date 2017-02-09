import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducer'

const routingMiddleware = routerMiddleware(browserHistory)

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    routingMiddleware
  )
)

export default store
