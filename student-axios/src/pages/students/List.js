import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function List() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res =>{
            setList(res.data);
        })
    }, []);
    return(
        <>
            <h1>List Students</h1>
            {list.map((item, key) => {
                return (
                    <Link to={'/edit-student/'+item.id}> <h3 key={key}>{item.name}: {item.description}</h3></Link>
                )
            })}
        </>
    )
}
export default List;