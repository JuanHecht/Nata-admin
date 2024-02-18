import './ExpenseCard.css'
import {Link} from  'react-router-dom';
import categories from '../data/categories.json'


function ExpenseCard(props) {
    const {entry} = props;
    
    const assignImage = (category) => {
      // Find the category in the categories JSON data
      const foundCategory = categories.find(item => item.name === category);
      // If category is found, return its corresponding image
      if (foundCategory) {
          return foundCategory.image;
      } else {
          // If category is not found, return a default image or handle accordingly
          return 'default-image-url.jpg'; // Replace 'default-image-url.jpg' with your default image URL
      }
    };

        return (
          <div className="card" key={entry.id}>
            <div  className="imgContainer">
              <img className="cardImg" src={assignImage(entry.category)} alt={entry.category} />
            </div>
            <div className='cardInfo'>
              <Link to={`entry/${entry.id}`} key={entry.id}>
                <div>
                  <section className='cardLine'><h3>Title: </h3><h4 className='entryInfo'>{entry.title}</h4></section>
                  <section className='cardLine'><h3>Amount: </h3><h4 className='entryInfo' style={{color: entry.value < 0 ? 'rgb(174, 0, 0)' : 'rgb(6, 90, 6)'}}>{entry.value} €</h4></section>
                  <section className='cardLine'><h3>Date: </h3><h4 className='entryInfo'>{entry.date}</h4></section>
                  <section className='cardLine'><h3>Description: </h3><h4 className='entryInfo'>{entry.description}</h4></section>
                </div>
              </Link>
            </div>
          </div>
        );
        }

export default ExpenseCard;