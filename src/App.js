import { connect } from "react-redux";
import * as actions from "./redux//counter/counter-actions.js";
import "./App.css";

function App({ value, onIncrement, onDecrement, step }) {
  return (
    <div className="App">
      <div>
        <button type="button" onClick={() => onIncrement(step)}>
          Increment on {step}
        </button>
        <h1>{value}</h1>
        <button type="button" onClick={() => onDecrement(step)}>
          Dectrement on {step}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: (value) => dispatch(actions.increment(value)),
  onDecrement: (value) => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
