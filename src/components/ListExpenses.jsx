import expenses from "../data/expenses.json";
import { useState } from "react";
import ExpenseCard from "./ExpenseCard";

function ListExpenses() {
  const [expense, setExpense] = useState([...expenses]);

  function removeItem(index) {
    const updatedExpense = expense.filter((entry) => entry.id !== index);
    setExpense(updatedExpense);
  }


  return (
    <div>
      {expense.map((entry)=>(
        <ExpenseCard key={entry.id} entry={entry} removeItem={removeItem} />
      ))}
    </div>
  );
}

export default ListExpenses;