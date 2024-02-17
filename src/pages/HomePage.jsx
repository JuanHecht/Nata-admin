import axios from "axios";
import { useState, useEffect } from "react";
import ExpenseCard from "./../components/ExpenseCard";
import { Link } from "react-router-dom";
import Balance from "../components/Balance";
import Sidebar from '../components/Sidebar'

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

  // Initial sort to display de entries by newest to oldest by date
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));

  function sortByValueUp(){
    const sortedByValue = [...expenses].sort((a, b) => a.value - b.value);
    setExpenses(sortedByValue)
  }
  function sortByValueDown(){
    const sortedByValue = [...expenses].sort((a, b) => b.value - a.value);
    setExpenses(sortedByValue)
  }

  return (
    <section className="main">

      <Sidebar sortByValueUp={sortByValueUp} sortByValueDown={sortByValueDown} expenses={expenses}/>

      <div className="entriesDisplay">
        <Link to={"/add-new-entry"}>
          <button>Add New Entry</button>
        </Link>
        {expenses.map(entry => (
          <ExpenseCard key={entry.id} entry={entry}  removeItem={removeItem} />
        ))}
      </div>
      <section className="balance">
        <Balance/>
      </section>
    </section>
  );
}

export default HomePage;
