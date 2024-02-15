import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:3000/entries";

function AddNewEntryPage() {

    const [entryType, setEntryType] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [subscription, setSubscription] = useState("");

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        const newEntry = {entryType, title, value, date, description, subscription};

        axios
        .post(`${API_URL}`, newEntry)
        .then(()=>{ navigate("/")})
        .catch((error)=>{console.log(error)})
    }


  return (
    <div>
        <h1>Add New Entry</h1>

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
                
                <select name="iron-city">
                    <option value="mad">Madrid</option>
                    <option value="bcn">Barcelona</option>
                    <option value="mia">Miami</option>
                    <option value="mex">Mexico City</option>
                    <option value="par">Paris</option>
                    <option value="ber">Berlin</option>
                    <option value="ams">Amsterdam</option>
                    <option value="sao">Sao Paulo</option>
                    <option value="lis">Lisbon</option>
                </select>

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

                <button type="submit">Add Entry</button>

            </form>
    </div>
  )
}

export default AddNewEntryPage;