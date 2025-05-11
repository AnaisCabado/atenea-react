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
            <h1 className="register__title">Register</h1>


            <form onSubmit={handleSubmit}  action="" className="register__form">
                <input type="text" name="name" id="name" placeholder="Complete name" />
                <input type="email" name="email" id="email" /* onChange={handleEmail} */ placeholder="Your email" />
                <input type="password" name="password" id="password" /* onChange={handlePassword} */ placeholder="Create password" />
                <input type="password" name="password" id="password" /* onChange={handlePassword} */ placeholder="Repeat password" />

                <button>Register</button>
            </form>
            <NavLink to='/login'><p className="login-link">Already have an account? Login.</p></NavLink>

        </article>
    )
}

export default Register