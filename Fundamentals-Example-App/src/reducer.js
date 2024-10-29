import { combineReducers } from 'redux'

import todosReduser from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  todos: todosReduser,
  filters: filtersReducer,
})

export default rootReducer
