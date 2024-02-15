import './ExpenseCard.css'
import {Link} from  'react-router-dom';


function ExpenseCard(props) {
    const {entry, removeItem} = props;

    /*  create function assignImage() 
    1. a function that holds a switch and assigns an image based on the itemCategory
    2. Create a databank of images and assign them with the function*/

        return (
          <div className="card" key={entry.id}>
            <img className="cardImg" src={entry.image} />
            <div>
              <Link to={`entry/${entry.id}`} key={entry.id}>
                <div>
                  <h3>{entry.title}</h3>
                  <h3>{entry.value}</h3>
                  <h3>{entry.date}</h3>
                  <h3>{entry.description}</h3>
                </div>
              </Link>
            </div>
          </div>
        );
        }

export default ExpenseCard;