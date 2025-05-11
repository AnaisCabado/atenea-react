import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Login.css';

function Login() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });


    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setLoginData((oldLogin) => {
            return { ...oldLogin, email: newEmail }
        })
    }

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setLoginData((oldLogin) => {
            return { ...oldLogin, password: newPassword }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await res.json();

            if (!res.ok) {
                setUserData(data.user);
                Navigate(`/profile/${data.user.username}`);
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error;', error);
            alert('Error connecting to server');
        }
    };

    return (
        <article className="login">
            <h1 className="login__title">Login</h1>

            <form onSubmit={handleSubmit} method="POST" className="login__form">
                <input type="email" name="email" id="email" onChange={handleEmail} value={loginData.email} placeholder="Your email" required />
                <input type="password" name="password" id="password" onChange={handlePassword} value={loginData.password} placeholder="Enter your password" required />

                <button>Login</button>
            </form>
            <NavLink to ='/register'><p className="register-link">Haven't an account yet? Register.</p></NavLink>
        </article>
    )
}

export default Login