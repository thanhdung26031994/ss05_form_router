import {useState} from "react";
import "./Logincss.css";

export default function Login(){
    const MESSAGE_ERROR = {
        email: "Email error",
        password: "Password error"
    }
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const [form, setForm] = useState({});

    function handleChange(e){
        let error = REGEX[e.target.name].test(e.target.value)
        ? "" : MESSAGE_ERROR[e.target.name];
        setForm({
            ...form, [e.target.name]: {value: e.target.value, error: error}
        });
    }

    function handleSubmit(){
        const isFilled =
            form.email && form.email.value && form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error);
        alert(isFilled && !isError
        ? "Login in successfully!!!" : "Please fill out all the fields!!!");
    }
    return(
        <>
            <div>
                <h1>Login</h1>
                <form>
                    <div className={`custom-input ${form.email && form.email.error && "custom-input-error"}`}>
                        <label>Email</label>
                        <input name={'email'} value={(form.email && form.email.value) || ""} onChange={handleChange}/>
                        {form.email && form.email.error && (
                            <p className={'error'}>Email error</p>
                        )}
                    </div>
                    <div
                        className={`custom-input ${form.password &&
                        form.password.error &&
                        "custom-input-error"}`}
                    >
                        <label>Password </label>
                        <input
                            type="password"
                            name="password"
                            value={(form.password && form.password.value) || ""}
                            onChange={handleChange}
                        />
                        {form.password && form.password.error && (
                            <p className="error">Password error</p>
                        )}
                    </div>
                    <button type={'button'} onChange={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}