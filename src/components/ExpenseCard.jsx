function ExpenseCard(props) {
    const {entry, removeItem} = props;
    /*  create function assignImage() 
    1. a function that holds a switch and assigns an image based on the itemCategory
    2. Create a databank of images and assign them with the function*/

        return (
          <div
            key={entry.id}
            style={{ display: "flex", flexDirection: "row", border: "1px solid black" }}
          >
            <img src={entry.image} height={150} width={250} />
            <div>
                <h3>{entry.title}</h3>
                <h3>{entry.value}</h3>
                <h3>{entry.date}</h3>
                <h3>{entry.description}</h3>
                <button onClick={() => removeItem(entry.id)}>Delete Entry</button>
            </div>
          </div>
        );
        }

export default ExpenseCard;