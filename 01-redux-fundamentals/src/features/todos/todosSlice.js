const initialState = []

function nextToDosId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
  return maxId + 1
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: nextToDosId(state),
          text: action.payload,
          completed: false,
        },
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      return state.map(todo => {
        const { color, todoId } = action.payload
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map(todo => ({
        ...todo,
        completed: true,
      }))
    }
    case 'todos/completedCleared': {
      return state.filter(todo => !todo.completed)
    }
    default:
      return state
  }
}
