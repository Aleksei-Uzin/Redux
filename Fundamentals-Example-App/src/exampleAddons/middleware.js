export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  console.log('storeAPI 1: ', storeAPI)
  console.log('next 1: ', next)
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  console.log('storeAPI 2: ', storeAPI)
  console.log('next 2: ', next)
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  console.log('storeAPI 3: ', storeAPI)
  console.log('next 3: ', next)
  return next(action)
}

export const loggedStore = (storeAPI) => (next) => (action) => {
  console.log('dispatching', action)

  setTimeout(() => {
    console.log('Added a new todo: ', action.payload)
  }, 1000)

  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}
