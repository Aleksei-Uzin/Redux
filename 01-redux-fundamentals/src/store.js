import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import rootReducer from './reducer'
import { delayedMessageMiddleware } from './exampleAddons/middleware'

const composedEnhancer = composeWithDevTools(
  applyMiddleware(delayedMessageMiddleware)
)

const store = createStore(rootReducer, composedEnhancer)

export default store
