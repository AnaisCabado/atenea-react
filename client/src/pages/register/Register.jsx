import { useState, useEffect } from "react";

// import './Register.css';

function Register() {
    // const [RegisterData, setRegisterData] = useState({
    //     email: "",
    //     password: ""
    // });


    // const handleEmail = (e) => {
    //     const newTitle = e.target.value;
    //     setRegisterData((oldRegister) => {
    //         return { ...oldRegister, email: newEmail }
    //     })
    // }

    // const handlePassword = (e) => {
    //     const newPassword = e.target.value;
    //     setRegisterData((oldRegister) => {
    //         return { ...oldRegister, password: newPassword }
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await createPublication(publicationData);
    //     console.log(response);
    // }

    return (
        <article className="Register">
            <h1 className="create-publication__title">Register</h1>

            <section className="create-publication__form">
                <form /* onSubmit={handleSubmit}  */action="">
                    <input type="email" name="email" id="email" /* onChange={handleEmail} */ placeholder="Your email" />
                    <input type="password" name="password" id="password" /* onChange={handlePassword} */ placeholder="Enter your password" />

                    <button>Register</button>
                </form>
                <p className="register-link">Haven't an account yet? Register.</p>
            </section>
        </article>
    )
}

export default Register