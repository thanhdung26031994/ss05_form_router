
import Navbar from "../components/Navbar";
import {Link, Outlet} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Home() {
    return(
        <>
            <Header></Header>
            <Navbar></Navbar>
            <Link to={'/'}>List Student</Link>
            <Link to={'/create-student'}>Create Student</Link>
            <hr/>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}
export default Home;