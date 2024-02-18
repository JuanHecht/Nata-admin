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

  function sortByDateNewToOld(){
    const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date) - new Date(a.date));
    setExpenses(sortedExpenses)
  }

  function sortByDateOldtoNew(){
    const sortedExpenses = [...expenses].sort((a, b) => new Date(a.date) - new Date(b.date));
    setExpenses(sortedExpenses)
  }

  function sortByValueUp(){
    const sortedByValue = [...expenses].sort((a, b) => a.value - b.value);
    setExpenses(sortedByValue)
  }
  function sortByValueDown(){
    const sortedByValue = [...expenses].sort((a, b) => b.value - a.value);
    setExpenses(sortedByValue)
  }

  function showExpenses(){
    const sortedByTypeExp = [...expenses].filter((entry)=>{return(entry.entryType === true)})
    setExpenses(sortedByTypeExp)
  }

  function showIncome(){
    const sortedByTypeInc = [...expenses].filter((entry)=>{return(entry.entryType !== true)})
    setExpenses(sortedByTypeInc)
  }

  function removeAllFilters() {
    axios.get(API_URL)
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
      });
  }

  return (
    <section className="main">

      <Sidebar
        sortByDateNewToOld={sortByDateNewToOld}
        sortByDateOldtoNew={sortByDateOldtoNew}
        sortByValueUp={sortByValueUp} 
        sortByValueDown={sortByValueDown}
        showExpenses={showExpenses}
        showIncome={showIncome}
        removeAllFilters={removeAllFilters}
        expenses={expenses}/>

      <div className="entriesDisplay">
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
