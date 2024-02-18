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
        <div className="details">
            <h2>Entry Data</h2>
            <h3>{entryData.title}</h3>
            <p><b>Value:</b> {`${entryData.value} €`}</p>
            <p><b>Date:</b> {entryData.date}</p> 
            <p><b>Description:</b> {entryData.description}</p>
            <div>
                <p><b>Recurring:</b> {entryData.subscription ? "Yes" : "No"}</p>
            </div>
            <div className="detailsBtns">
                <Link to={`/edit-entry/${entryId}`}>
                    <button>Edit entry</button>
                </Link>
                <button onClick={() => removeItem(entryId)}>Delete Entry</button>
            </div>
        </div>
    )
}
export default ExpenseDetails;