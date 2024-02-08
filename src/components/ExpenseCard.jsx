import './ExpenseCard.css'

function ExpenseCard(props) {
    const {entry, removeItem} = props;
    /*  create function assignImage() 
    1. a function that holds a switch and assigns an image based on the itemCategory
    2. Create a databank of images and assign them with the function*/

        return (
          <div className="card"
            key={entry.id}
          >
            <img className="cardImg" src={entry.image} />
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