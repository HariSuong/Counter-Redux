import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/counter'
import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  const dispatch = useDispatch()

  const handleInscrement = () => {
    dispatch(counterActions.increment())
  }
  const handleDescrement = () => {
    dispatch(counterActions.decrement())
  }
  const handleInscrement5 = () => {
    dispatch(counterActions.increse(5))
  }

  const handleToggleCounter = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={handleInscrement}> Increment </button>
        <button onClick={handleInscrement5}> Increment 5 </button>
        <button onClick={handleDescrement}> Decrement </button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  )
}

export default Counter
