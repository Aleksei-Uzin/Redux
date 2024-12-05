import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { capitalize, COLORS } from '../filters/colors'

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}

export const TodoListItem = ({ id, onColorChange, onDelete }) => {
  const todo = useSelector(state => selectTodoById(state, id))
  const dispatch = useDispatch()

  const { text, completed, color } = todo

  const handleCompletedChanged = e => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id })
  }

  const handleColorChanged = e => {
    const color = e.target.value
    dispatch({
      type: 'filters/colorFilterChanged',
      payload: { color, changeType: 'added' },
    })
  }

  const colorOptions = COLORS.map(c => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}
