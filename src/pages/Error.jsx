import {Link} from 'react-router-dom'

function Error(){
    return(
        <section>
            <h1>404 Page Not Found</h1>
            <Link to="/">
                <h1>Go Back To Home Page</h1>
            </Link>
        </section>
    )
}

export default Error;