import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const API_URL = "http://localhost:3000/entries/";


function ExpenseDetails(){
    const {entryId} = useParams();
    const [entryData, setEntryData] = useState("")
    const navigate = useNavigate();

    function removeItem(id) {
        axios.delete(`${API_URL}/${entryId}`)
          .then(() => {
            navigate("/")
          })
          .catch(error => {
            console.error('Error deleting expense:', error);
          });
      } 

    useEffect(()=>{
        axios.get(`${API_URL}/${entryId}`)
        .then((response)=>{
            setEntryData(response.data)
        })
        .catch((error)=>console.log(error))
    })

    /* Need to import the updated expenses json file (the temporary one created with params) */
  
    return (
        <div>
            <h2>Entry Data:</h2>
            <h3>{entryData.title}</h3>
            <p>Value: {`${entryData.value} €`}</p>
            <p>Date: {entryData.date}</p> 
            <p>Description: {entryData.description}</p>
            <div>
                <p>Recurring: {entryData.subscription ? "Yes" : "No"}</p>
            </div>
            <Link to={`/edit-entry/${entryId}`}>
                <button>Edit entry</button>
            </Link>
            <button onClick={() => removeItem(entryId)}>Delete Entry</button>
        </div>
    )
}
export default ExpenseDetails;