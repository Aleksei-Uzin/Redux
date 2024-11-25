export const sayHiOnDispatch =
  createStore => (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    const newDispatch = action => {
      const result = store.dispatch(action)
      console.log('Hi!')
      return result
    }

    return { ...store, dispatch: newDispatch }
  }

export const includeMeaningOfLife =
  createStore => (rootReducer, preloadedState, enhancers) => {
    const store = createStore(rootReducer, preloadedState, enhancers)

    const newGetState = () => {
      const state = store.getState()
      return { ...state, meaningOfLife: 42 }
    }

    return { ...store, getState: newGetState }
  }
