import { useSelector } from 'react-redux'

export const RemainingTodos = () => {
  const todosRemaining = useSelector(state => {
    const uncompletedTodos = state.todos.filter(todo => !todo.completed)
    return uncompletedTodos.length
  })

  const suffix = todosRemaining === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{todosRemaining}</strong> item{suffix} left
    </div>
  )
}
