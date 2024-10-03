import { useState } from "react"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectValue,
} from "./counterSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Counter.module.css"

export const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState("2")
  const incrementValue = Number(incrementAmount) || 0
  const count = useAppSelector(selectValue)
  const dispatch = useAppDispatch()

  const handleDecrement = () => dispatch(decrement())
  const handleIncrement = () => dispatch(increment())
  const handleIncrementByAmount = () =>
    dispatch(incrementByAmount(incrementValue))
  const handleIncrementAsync = () => dispatch(incrementAsync(incrementValue))
  const handleIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue))

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button} onClick={handleIncrementByAmount}>
          Add Amount
        </button>
      </div>
      <div className={styles.row}>
        <button className={styles.asyncButton} onClick={handleIncrementAsync}>
          Add Async
        </button>
        <button className={styles.button} onClick={handleIncrementIfOdd}>
          Add If Odd
        </button>
      </div>
    </div>
  )
}
