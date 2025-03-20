import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  [
    {
      amount: 0,
      category: "",
      type: "Income",
      date: "2025-03-11",
      id: "5b874cfb-2fd1-4629-a601-09b38521fb19",
    },
    {
      amount: 900,
      category: "Extra income",
      type: "Income",
      date: "2025-03-11",
      id: "d78a2052-370c-401e-beee-9c43485480f4",
    },
    {
      amount: 750,
      category: "House",
      type: "Expense",
      date: "2025-03-11",
      id: "6fdabfd5-504f-487c-95e5-c4781b315d61",
    },
    {
      amount: 500,
      category: "Travel",
      type: "Expense",
      date: "2025-03-11",
      id: "3b282cdb-89a0-4de5-b668-fba5ce0f6609",
    },
    {
      amount: 400,
      category: "Shopping",
      type: "Expense",
      date: "2025-03-11",
      id: "8deca6ee-1447-4c26-b9d1-a36a53d3c858",
    },
    {
      amount: 400,
      category: "Deposits",
      type: "Income",
      date: "2025-03-05",
      id: "d9bc3f52-0767-47a2-be1f-2bbdf4b50bc1",
    },
    {
      amount: 500,
      category: "Investments",
      type: "Income",
      date: "2025-03-11",
      id: "eaeb5f9f-8ccf-4138-8f81-518bbdbb0670",
    },
  ],
];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  const balance = transactions.reduce(
    (acc, currVal) =>
      currVal.type === "Expense" ? acc - currVal.amount : acc + currVal.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
