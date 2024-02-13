import expenseData from './../data/expenses.json'
import { useParams } from "react-router-dom";


function ExpenseDetails(){
    const {entryId} = useParams()
    const entryData = expenseData.find((entry) => entry.id == entryId);


    /* Need to import the updated expenses json file (the temporary one created with params) */
  
    return (
        <div>
            <h2>Entry Data:</h2>
            <h3>{entryData.title}</h3>
            <p>Value: {entryData.value}€</p>
            <p>Date: {entryData.date}</p>
            <p>Description: {entryData.description}</p>
            <div>
                <p>Recurring: {entryData.subscription ? (<p>Yes</p>) : (<p>No</p>)}</p>
            </div>
        </div>
    )
}
export default ExpenseDetails