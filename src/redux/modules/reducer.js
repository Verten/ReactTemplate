import { combineReducers } from 'redux'
import Login from './login/index.ts'


const rootReducer = combineReducers(
  Object.assign(
    {},
    {
      Login,
    },
  ),
)

export default rootReducer
