import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/reduxcounter";
const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const IncrementHandler = () => {
    dispatch(counterActions.INCREMENT());
  };

  const DecrementHandler = () => {
    dispatch(counterActions.DECREMENT());
  };

  const IncrementBy5Handler = () => {
    dispatch(counterActions.INCREMENTBY5(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={IncrementBy5Handler}>IncrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
