//11. ES6 Spread Operator in Reducers
import { createStore, combineReducers } from "redux";
import uuid from "uuid";

////////////////////////ACTIONS////////////////////////
// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: { id: uuid(), description, note, amount, createAt },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expanses Reducer
const expensesReducerDefaultState = [];
const expensesReducers = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//Filters Reducer
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducers = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//store action
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 300 })
);

store.dispatch(removeExpense({ id: expense1.expense.id }));

store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

const demoState = {
  expenses: [
    {
      id: "oiejoiejdwded",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "pooyan",
  age: 24,
};

console.log({
  ...user,
  location: "karaj",
});
