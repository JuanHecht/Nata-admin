import axios from "axios";
import { useState, useEffect } from "react";
import ExpenseCard from "./../components/ExpenseCard";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000/entries"; 

function HomePage() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
      });
  }, []); 

  function removeItem(id) {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense.id !== id));
      })
      .catch(error => {
        console.error('Error deleting expense:', error);
      });
  } 

  return (
    <section>
      <div className="entriesDisplay">
        <Link to={"/add-new-entry"}>
          <button>Add New Entry</button>
        </Link>
        {expenses.map(entry => (
          <ExpenseCard key={entry.id} entry={entry}  removeItem={removeItem} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
