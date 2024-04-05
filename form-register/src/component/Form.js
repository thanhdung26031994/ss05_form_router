import {useState} from "react";

export default function Form(){
    const MESSAGE_ERROR = {
        username: "Username error",
        email: "Email error",
        password: "Password error",
        confirmPassword: "Password must be the same"
    };

    const REGEX = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/
    }

    const [form, setForm] = useState({});

    const handleChange = (e) => {
        let error = "";
        if (e.target.name === "password"){
            if (form.confirmPassword && form.confirmPassword.value){
                error =
                    e.target.value === form.confirmPassword.value
                ? "" : MESSAGE_ERROR[e.target.name];
            }else {
                error = REGEX[e.target.name].test(e.target.value)
                ? "" : MESSAGE_ERROR[e.target.name];
            }
        }else if (e.target.name === 'confirmPassword'){
            error = e.target.value === form.password.value
            ? "": MESSAGE_ERROR[e.target.name];
        }else {
            error = REGEX[e.target.name].test(e.target.value)
            ? "":MESSAGE_ERROR[e.target.name];
        }
        setForm({
            ...form, [e.target.name]: { value: e.target.value, error: error }
        });
    }

    const handleSubmit = () => {
        const isFilled =
            form.username &&
            form.username.value &&
            form.email &&
            form.email.value &&
            form.password &&
            form.password.value &&
            form.confirmPassword &&
            form.confirmPassword.value;

        const isError =
            isFilled &&
            (form.username.error ||
                form.email.error ||
                form.password.error ||
                form.confirmPassword.error);

        alert(
            isFilled && !isError
                ? "Sign up successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }

    return(
        <>
            <div>
                <h1>Sign up</h1>
                <form>
                    <div className={`custom-input ${form.username}`}>
                        <label>Username</label>
                        <input name={'username'}
                               value={(form.username && form.username.value) || ""}
                               onChange={handleChange}/>
                        {
                            form.username && form.username.error &&
                            (
                                <p className={'error'}>{form.username.error}</p>
                            )
                        }
                    </div>
                    <div className={`custom-input ${form.email}`}>
                        <label>Email</label>
                        <input name={'email'}
                               value={form.email || ""}
                               onChange={handleChange}/>
                        {form.email && form.email.error && (
                            <p className="error">{form.email.error}</p>
                        )}
                    </div>
                    <div className={`custom-input ${form.password}`}>
                        <label>Password</label>
                        <input type={'password'} name={'password'}
                               value={form.password || ""}
                               onChange={handleChange}/>
                        {form.password && form.password.error && (
                            <p className="error">{form.password.error}</p>
                        )}
                    </div>
                    <div className={`custom-input ${form.confirmPassword}`}>
                        <label>Confirm password</label>
                        <input type={'password'} name={'password'}
                               value={form.confirmPassword || ""}
                               onChange={handleChange}/>
                        {form.confirmPassword && form.confirmPassword.error && (
                            <p className="error">{form.confirmPassword.error}</p>
                        )}
                    </div>

                    <button type="button" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}