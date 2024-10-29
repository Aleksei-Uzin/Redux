import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
import { loggedStore, print1, print2, print3 } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  applyMiddleware(print1, print2, print3, loggedStore)
)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
