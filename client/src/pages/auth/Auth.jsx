import { useState,useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";

import './Auth.css';

function Auth () {
    const [isRegister,setIsRegister] = useState(false);
    const [error,setError] = useState(null);
    const [userData,setUserData] = useState({
        email: "",
        password:""
    })
    const {onLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleUserPassword = (e) =>{
        const newPassword = e.target.value;
        console.log("user password",newPassword)
        const newState = {...userData,password:newPassword}
        setUserData(newState);
    }
    const handleUserEmail = (e) =>{
        const newEmail = e.target.value;
        console.log("user Email",newEmail)
        const newState = {...userData,email:newEmail}
        setUserData(newState);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        // sin formulario controlado, sacariamos los datos de los inputs
        console.log("login",userData);
        const result = await onLogin(userData.email, userData.password);
        
        if (!result) {
            navigate('/my-profile');
        } else {
            setError(result);
        }
    }
    return (
        <section className="auth-section">

            <img src="/src/assets/logotipo.svg" alt="logotipo" className="logotipo-login" />
            <p className="error">{error}</p>
            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id= "email" value={userData.email} onChange={handleUserEmail} placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={userData.password} onChange={handleUserPassword} placeholder="Password" />
                <button>Get in</button>
            </form>
            <NavLink to ='/register'><p className="register-link">Haven't an account yet? Register.</p></NavLink>
        </section>
    )
}

export default Auth;