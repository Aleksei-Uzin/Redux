import { useDispatch, useSelector } from 'react-redux'
import { STATUSFILTERS } from '../filters/filtersSlice'

export const StatusFilter = () => {
  const { status } = useSelector(state => state.filters)
  const dispatch = useDispatch()

  const renderedFilters = Object.keys(STATUSFILTERS).map(key => {
    const value = STATUSFILTERS[key]
    const handleClick = () =>
      dispatch({ type: 'filters/statusFilterChanged', payload: value })
    const className = value === status ? 'selected' : ''

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    )
  })

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  )
}
