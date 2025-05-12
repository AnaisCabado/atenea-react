import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import './Register.css';

function Register() {
    const [RegisterData, setRegisterData] = useState({
        email: "",
        password: ""
    });


    const handleEmail = (e) => {
        const newTitle = e.target.value;
        setRegisterData((oldRegister) => {
            return { ...oldRegister, email: newEmail }
        })
    }

    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setRegisterData((oldRegister) => {
            return { ...oldRegister, password: newPassword }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createPublication(publicationData);
        console.log(response);
    }

    return (
        <article className="register">
            <img src="/src/assets/logotipo.svg" alt="logotipo" className="logotipo-register" />


            <form onSubmit={handleSubmit} action="" className="register__form">
                <h1>Register</h1>
                
                <label htmlFor="first_name">First name </label>
                <input type="text" name="first_name" id="first_name" placeholder="First name" />
                <label htmlFor="last_name">Last name </label>
                <input type="text" name="last_name" id="last_name" placeholder="Last name" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" /* onChange={handleEmail} */ placeholder="Your email" />
                <label htmlFor="password">Password</label>
                <input type="first_password" name="first_password" id="first_password" /* onChange={handlePassword} */ placeholder="Create password" />
                <input type="second_password" name="second_password" id="second_password" /* onChange={handlePassword} */ placeholder="Repeat password" />

                <button>Register</button>
            </form>
            <NavLink to='/login'><p className="login-link">Already have an account? Login.</p></NavLink>

        </article>
    )
}

export default Register