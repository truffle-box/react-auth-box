import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import loginReducer from './login/loginReducer'

const reducer = combineReducers({
  routing: routerReducer,
  user: loginReducer
})

export default reducer
