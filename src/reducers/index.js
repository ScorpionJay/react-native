import { combineReducers } from 'redux'
import  home from './home'
import  login from './login'
import  inverst from './inverst'
import  spin from './spin'

const reducers = combineReducers({
  home,
  login,
  inverst,
  spin
})

export default reducers