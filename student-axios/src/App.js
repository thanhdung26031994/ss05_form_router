import './App.css';
import {Route, Routes, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Create from "./pages/students/Create";
import Edit from "./pages/students/Edit";
import List from "./pages/students/List";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/'} element={<List/>}></Route>
                    <Route path={'/create-student'} element={<Create/>}></Route>
                    <Route path={'/edit-student/:id'} element={<Edit/>}></Route>
                </Route>

                <Route path={'/admin'} element={<Admin/>}></Route>
            </Routes>
        </>
    );
}

export default App;
