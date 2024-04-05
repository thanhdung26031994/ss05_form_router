import {Link} from "react-router-dom";


function Navbar() {
    return(
        <>

            <h1>
                <Link to={'/'}>Home</Link>
                <hr/>
                <Link to={'/admin'}>Admin</Link>
            </h1>
        </>
    )
}
export default Navbar;