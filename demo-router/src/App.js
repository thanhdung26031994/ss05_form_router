import {Routes, Route, Link} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
import React from "react";
// import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Product from "./pages/Product";

function App() {
    return (
        <>
            {/*<div>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/about">About</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/contact">Contact</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <Routes>
                {/*<Route path="/" element={<Home/>}/>*/}
                {/*<Route path="/about" element={<About/>}/>*/}
                {/*<Route path="/contact" element={<Contact/>}/>*/}
                <Route path="/" element={<Category/>}/>
                <Route path="/product/:categoryId" element={<Product/>}/>
            </Routes>
        </>

    );
}

export default App;
