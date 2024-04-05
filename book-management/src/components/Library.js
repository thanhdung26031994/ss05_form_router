import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Library() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/codegym-vn/mock-api-books/books').then(res =>{
            setList(res.data);
            console.log(res.data);
        }).catch(err =>{
            console.log(err);
        })
    }, []);

    const handleDelete = (deleteId) => {
        if (deleteId !== 0){
            if (window.confirm(`You sure delete ${deleteId} ?`)){
                axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${deleteId}`).then(res =>{
                    alert(`Delete book ${JSON.stringify(res.data)} success!`);
                    console.log(res);
                })
            }
        }
    };


    return(
        <>
            <div>
                <h1>Library</h1>
                <div>
                    <Link to={'/create-book'}>
                        <button>Add new book</button>
                    </Link>
                </div>
            </div>
            <table>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                {list.map((list, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{list.title}</td>
                        <td>{list.quantity}</td>
                        <td>
                            <button onClick={() => {
                                navigate(`/edit/${list.id}`)
                            }}>
                                Edit
                            </button>
                            <button onClick={() =>{
                                handleDelete(list.id);
                            }}>
                                Delete
                            </button>
                        </td>

                    </tr>
                ))}
            </table>
        </>
    )
}
export default Library;