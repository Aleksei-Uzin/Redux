export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  console.log(action)
  const result = next(action)
  console.log(storeAPI.getState())
  return result
}
