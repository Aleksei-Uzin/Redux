import { useDispatch, useSelector } from 'react-redux'
import { COLORS, capitalize } from '../filters/colors'

export const ColorFilters = () => {
  const { colors } = useSelector(state => state.filters)
  const dispatch = useDispatch()

  const renderedColors = COLORS.map(color => {
    const checked = colors.includes(color)

    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added'
      dispatch({
        type: 'filters/colorFilterChanged',
        payload: { color, changeType },
      })
    }

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className="color-block"
          style={{
            backgroundColor: color,
          }}
        ></span>
        {capitalize(color)}
      </label>
    )
  })

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColors}</form>
    </div>
  )
}
