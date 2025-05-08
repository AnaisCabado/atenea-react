import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Login.css';

function Login() {
    // const [loginData, setLoginData] = useState({
    //     email: "",
    //     password: ""
    // });


    // const handleEmail = (e) => {
    //     const newTitle = e.target.value;
    //     setLoginData((oldLogin) => {
    //         return { ...oldLogin, email: newEmail }
    //     })
    // }

    // const handlePassword = (e) => {
    //     const newPassword = e.target.value;
    //     setLoginData((oldLogin) => {
    //         return { ...oldLogin, password: newPassword }
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await createPublication(publicationData);
    //     console.log(response);
    // }

    return (
        <article className="login">
            <h1 className="login__title">Login</h1>

            <form /* onSubmit={handleSubmit}  */ action="" className="login__form">
                <input type="email" name="email" id="email" /* onChange={handleEmail} */ placeholder="Your email" />
                <input type="password" name="password" id="password" /* onChange={handlePassword} */ placeholder="Enter your password" />

                <button>Login</button>
            </form>
            <NavLink to ='/register'><p className="register-link">Haven't an account yet? Register.</p></NavLink>
        </article>
    )
}

export default Login