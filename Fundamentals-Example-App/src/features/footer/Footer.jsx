import { useDispatch, useSelector } from 'react-redux'
import { RemainingTodos } from './RemainingTodos'
import { StatusFilter } from './StatusFilter'
import { ColorFilters } from './ColorFilters'

const Footer = () => {
  const dispatch = useDispatch()

  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  })

  const { colors, status } = useSelector((state) => state.filters)

  const onMarkCompletedClicked = () => dispatch({ type: 'todos/allCompleted' })

  const onClearCompletedClicked = () => {
    dispatch({ type: 'todos/completedCleared' })
  }

  const onColorChange = (color, changeType) =>
    dispatch({
      type: 'filters/colorFilterChanged',
      payload: {
        color,
        changeType,
      },
    })

  const onStatusChange = (status) =>
    dispatch({ type: 'filters/statusFilterChanged', payload: status })

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onMarkCompletedClicked}>
          Mark All Completed
        </button>
        <button className="button" onClick={onClearCompletedClicked}>
          Clear Completed
        </button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  )
}

export default Footer
