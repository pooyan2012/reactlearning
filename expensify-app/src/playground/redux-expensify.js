//15. Sorting Redux Data
import uuid from "uuid";
 
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 100, createAt: -21000 })
);
const expense2 = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createAt: -1000 })
);

// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("feo"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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
