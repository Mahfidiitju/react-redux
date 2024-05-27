import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./counterSlice";

function counterView() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default counterView;
