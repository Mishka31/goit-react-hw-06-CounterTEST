import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux//counter/counter-actions.js";
import "./App.css";

export default function App() {
  const value = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <button
          type="button"
          onClick={() => dispatch(actions.increment(value))}
        >
          Increment on {step}
        </button>
        <h1>{value}</h1>
        <button
          type="button"
          onClick={() => dispatch(actions.decrement(value))}
        >
          Dectrement on {step}
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   value: state.counter.value,
//   step: state.counter.step,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onIncrement: (value) => dispatch(actions.increment(value)),
//   onDecrement: (value) => dispatch(actions.decrement(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
