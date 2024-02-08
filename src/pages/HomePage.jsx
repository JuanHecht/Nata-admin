import expenses from "../data/expenses.json";
import { useState } from "react";
import ExpenseCard from "./../components/ExpenseCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [expense, setExpense] = useState([...expenses]);

  function removeItem(index) {
    const updatedExpense = expense.filter((entry) => entry.id !== index);
    setExpense(updatedExpense);
  }


  return (
    <div className="entriesDisplay">
      {expense.map((entry)=>(
        <Link to={`entry/${entry.id}`} key={entry.id}>
            <ExpenseCard key={entry.id} entry={entry} removeItem={removeItem} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;