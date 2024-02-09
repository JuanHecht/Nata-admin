import { useState } from "react";

function NewEntry(props){

    const [entryType, setEntryType] = useState("");
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [subscription, setSubscription] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        const newEntry = {entryType, title, value, date, description, subscription};
        props.addNewEntry(newEntry);

        // Set the reset after submitting

        setEntryType("");
        setTitle("");
        setValue("")
        setDate("")
        setDescription("")
        setSubscription("")
    }

    return(
        <section>
            <h1>Add a new entry</h1>

            <form onSubmit={handleSubmit} className="form">
                {/* New Entry */}
                <div className="entryType">
                    <div >
                        <input 
                            type="radio" 
                            name="expense"
                            value={entryType}
                            required
                            onChange={(e)=>{setEntryType(e.target.checked)}}
                            
                        />
                        <label>Expense</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="expense"
                            value={entryType}
                            required
                            onChange={(e)=>{setEntryType(e.target.checked)}}
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
                    onChange={(e)=>{setDate(e.target.value)}}
                />

                {/* New description */}
                <label>Description (optional):</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />

                {/* New category */}


                {/* New subscription */}
                <label>Subscription</label>
                <div className="entryType">
                    <div>
                    <label>Yes</label>
                    <input
                        type="radio"
                        name="subscription"
                        value={subscription}
                        onChange={(e)=>{setSubscription(e.target.value)}}
                    />
                    </div>
                    <div>
                    <label>No</label>
                    <input
                        type="radio"
                        name="subscription"
                        value={subscription}
                        onChange={(e)=>{setSubscription(e.target.value)}}
                    />
                    </div>
                </div>

                <button type="submit">Add Entry</button>

            </form>
        </section>
    )
}

export default NewEntry