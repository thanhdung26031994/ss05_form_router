import {useState} from "react";


export default function MyForm() {
    const [username, setUsername] = useState("");
    const handleChange = event => setUsername(event.target.value);
    let header;
    if (username){
        header = <h1>Hello {username}</h1>
    }else header = "";
    return(
        <>
            <form>
                {header}
                <p>Enter your name:</p>
                <input type={"text"} onChange={handleChange}/>
            </form>
        </>

    )
}