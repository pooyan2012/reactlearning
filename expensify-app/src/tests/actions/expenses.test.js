import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove exxpense action object", () => {
  const action = removeExpense({ id: "9832yh3i" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "9832yh3i",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "New note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { note: "New note value" },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 2432235,
    createdAt: 1000,
    note: "eroieoirgjoeirgjoeirgj oivoij",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData, id: expect.any(String) },
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    },
  });
});
