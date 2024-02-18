import {Link} from 'react-router-dom'

function Error(){
    return(
        <section className='pageError'>
            <h1>404 Page Not Found</h1>
            <Link to="/" style={{ color: 'black' }}>
                <h1>Go Back To Home Page</h1>
            </Link>
        </section>
    )
}

export default Error;