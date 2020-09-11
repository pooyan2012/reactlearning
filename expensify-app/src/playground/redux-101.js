//8. Refactoring and Organizing
import { createStore } from "redux";

//Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({ type: "SET", count });

const resetCount = () => ({ type: "RESET" });

const store = createStore((state = { count: 0 }, aciton) => {
  switch (aciton.type) {
    case "INCREMENT":
      return { count: state.count + aciton.incrementBy };
    case "DECREMENT":
      return { count: state.count - aciton.decrementBy };
    case "SET":
      return { count: aciton.count };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT",
//   incerementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//   type: "RESET",
// });
store.dispatch(resetCount());

// store.dispatch({
//   type: "DECREMENT",
// });

store.dispatch(decrementCount());
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });
store.dispatch(decrementCount({ decrementBy: 1000 }));

// store.dispatch({
//   type: "SET",
//   count: 101,
// });

store.dispatch(setCount({ count: 8494 }));
