//5. Subscribing and Dynamic Actions
import { createStore } from "redux";

const store = createStore((state = { count: 0 }, aciton) => {
  switch (aciton.type) {
    case "INCREMENT":
      const incerementBy =
        typeof aciton.incerementBy === "number" ? aciton.incerementBy : 1;
      return { count: state.count + incerementBy };
    case "DECREMENT":
      const decrementBy =
        typeof aciton.decrementBy === "number" ? aciton.decrementBy : 1;
      return { count: state.count - decrementBy };
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

store.dispatch({
  type: "INCREMENT",
  incerementBy: 5,
});

store.dispatch({
  type: "INCREMENT",
});

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 10,
});

store.dispatch({
  type: "SET",
  count: 101,
});
