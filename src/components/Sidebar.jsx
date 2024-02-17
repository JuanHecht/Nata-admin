import "./Sidebar.css"

function Sidebar(props){

    const {sortByValueUp, sortByValueDown} = props

    return(
        <div className="sidebar">
            <p>price</p>
            <p>expense</p>
            <button onClick={sortByValueUp}>Sort by value Up</button>
            <button onClick={sortByValueDown}>Sort by value Down</button>
        </div>
    )
}

export default Sidebar;