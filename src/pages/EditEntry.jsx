import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:3000/entries";

function EditEntry(){
    /* const [entry, setEntry] = useState(""); */
    const [entryType, setEntryType] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [subscription, setSubscription] = useState("");
    const navigate = useNavigate()
    
    const {entryId} = useParams()

    useEffect(()=>{
        axios
        .get(`${API_URL}/${entryId}`)
        .then((response)=>{
            const oneEntry = response.data
            setEntryType(oneEntry.entryType)
            setTitle(oneEntry.title)
            setValue(oneEntry.value)
            setDate(oneEntry.date)
            setDescription(oneEntry.description)
            setSubscription(oneEntry.subscription)
        })
        .catch((error)=>{console.log(error)})
    }, []);

    const  handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = {entryType, title, value, date, description, subscription};
        
        axios
        .put(`${API_URL}/${entryId}`, newEntry)
        .then(()=>navigate(`/entry/${entryId}`))
        .catch((error)=>{console.log(error)})
        
    }

    return(
        <div>
            <h1>Edit Entry</h1>
            <form onSubmit={handleSubmit} className="form">
                {/* New Entry */}
                <div className="entryType">
                    <div >
                        <input 
                            type="radio" 
                            name="expense"
                            value="expense"
                            checked={entryType === true}
                            required
                            onChange={()=>{setEntryType(true)}}
                            
                        />
                        <label>Expense</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="expense"
                            value="income"
                            checked={entryType === false}
                            required
                            onChange={()=>{setEntryType(false)}}
                        />
                        <label>Income</label>
                    </div>
                </div>

                {/* New Title */}
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    required
                    onChange={(e)=>{setTitle(e.target.value)}}
                />

                {/* New value */}
                <label>Amount:</label>
                <input
                    type="number"
                    name="value"
                    value={value}
                    required
                    onChange={(e)=>{setValue(e.target.value)}}
                />

                {/* New Date - need to review the data type that's being exported here in dates*/}
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={date}
                    required
                    max= "9999-12-31"
                    onChange={(e)=>{setDate(e.target.value)}}
                />

                {/* New description */}
                <label>Description (optional):</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />

                {/* New category itemCategory*/}


                {/* New subscription */}
                <label>Subscription</label>
                <div className="entryType">
                    <div>
                    <label>Yes</label>
                    <input
                        type="radio"
                        name="subscription"
                        value="true"
                        checked={subscription === true}
                        onChange={()=>{setSubscription(true)}}
                    />
                    </div>
                    <div>
                    <label>No</label>
                    <input
                        type="radio"
                        name="subscription"
                        value="false"
                        checked={subscription === false}
                        onChange={()=>{setSubscription(false)}}
                    />
                    </div>
                </div>

                <button type="submit">Edit</button>

            </form>
        </div>
    )
}

export default EditEntry