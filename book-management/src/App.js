import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Library from "./components/Library";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Library/>}></Route>
        <Route path={'/create-book'} element={<Create/>}></Route>
        <Route path={'/edit-book/:id'} element={<Edit/>}></Route>
      </Routes>
    </>
  );
}

export default App;
