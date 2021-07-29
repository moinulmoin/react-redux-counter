import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {counterActions} from '../store/slices/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const resetCounterHandler = () => {
    dispatch(counterActions.reset())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>decrease</button>
      </div>
      <div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetCounterHandler}>reset Counter</button>

      </div>
    </main>
  );
};

export default Counter;
