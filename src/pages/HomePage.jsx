import expenses from "../data/expenses.json";
import { useState } from "react";
import ExpenseCard from "./../components/ExpenseCard";
import { Link } from "react-router-dom";
import NewEntry from "./NewEntry";

function HomePage() {
  const [expense, setExpense] = useState(expenses);

  function removeItem(index) {
    const updatedExpense = expense.filter((entry) => entry.id !== index);
    setExpense(updatedExpense);
  }

  function addNewEntry(newEntry) {
    const updatedEntries = [newEntry,...expense]
    setExpense(updatedEntries)
  }

  return (
    <section>
      <div className="entriesDisplay">
        <NewEntry addNewEntry={addNewEntry}/>

        {expense.map((entry)=>(
          <Link to={`entry/${entry.id}`} key={entry.id}>
              <ExpenseCard key={entry.id} entry={entry} removeItem={removeItem} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomePage;