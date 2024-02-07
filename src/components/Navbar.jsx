import "./Navbar.css"
import nata from "../assets/images/example.png"

function Navbar(props){
    return (
        <div className="navbar">
            <img className="logo" src={nata}/>
            <h1>Nata Budgeting</h1>
        </div>
    )

}

export default Navbar;