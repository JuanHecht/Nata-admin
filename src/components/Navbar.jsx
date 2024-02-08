import "./Navbar.css"
import nata from "../assets/images/example.png"
import {Link} from 'react-router-dom'

function Navbar(props){
    return (
        <div className="navbar">
            <Link to="/">
                <img className="logo" src={nata}/>
            </Link>
            <h1>Nata Budgeting</h1>
        </div>
    )

}

export default Navbar;