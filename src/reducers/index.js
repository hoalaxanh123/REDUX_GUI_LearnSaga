// root reducer

import { combineReducers } from 'redux'
import TaskReducer from './tasks'

const rootReducer = combineReducers({
  task: TaskReducer //Rename to task (this.state.task)
})

export default rootReducer
