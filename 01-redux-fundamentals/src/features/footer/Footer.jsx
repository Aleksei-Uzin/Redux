import { useDispatch } from 'react-redux'
import { ColorFilters } from './ColorFilters'
import { RemainingTodos } from './RemainingTodos'
import { StatusFilter } from './StatusFilter'

const Footer = () => {
  const dispatch = useDispatch()

  const onMarkCompletedClicked = () => {
    dispatch({ type: 'todos/allCompleted' })
  }

  const onClearCompletedClicked = () => {
    dispatch({ type: 'todos/completedCleared' })
  }

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

      <RemainingTodos />
      <StatusFilter />
      <ColorFilters />
    </footer>
  )
}

export default Footer
