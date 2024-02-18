import "./Sidebar.css"
import { Link } from "react-router-dom";

function Sidebar(props){

    const {sortByDateNewToOld, sortByDateOldtoNew, sortByValueUp, sortByValueDown, showExpenses, showIncome, removeAllFilters} = props

    return(
        <div className="sidebar">
            <button onClick={sortByDateNewToOld}>Newest to Oldest</button>
            <button onClick={sortByDateOldtoNew}>Oldest to Newest</button>
            <button onClick={sortByValueUp}>Sort by value Up</button>
            <button onClick={sortByValueDown}>Sort by value Down</button>
            <button onClick={showExpenses}>Expenses</button>
            <button onClick={showIncome}>Income</button>
            <button onClick={removeAllFilters}>Remove filters</button>
            <Link to={"/add-new-entry"}>
                <button>Add New Entry</button>
            </Link>
        </div>
    )
}

export default Sidebar;