import expenses from "../data/expenses.json";
import { useState } from "react";
import ExpenseCard from "./../components/ExpenseCard";
import NewEntry from "../components/NewEntry";

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
  /* let lastIndex = expenses.length-1;
  console.log(expenses[lastIndex].id) */
  /* console.log(expenses.length) */
  function addNewId() {
    if (expense.length === 0) {
        return 1; 
    } else {
        let lastIndex = expense.length - 1
        const lastExpense = expense[lastIndex]
        return lastExpense.id + 1;
    }
}


  return (
    <section>
      <div className="entriesDisplay">
        <NewEntry addNewEntry={addNewEntry} addNewId={addNewId}/>

        {expense.map((entry)=>(
          
              <ExpenseCard key={entry.id} entry={entry} removeItem={removeItem} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;