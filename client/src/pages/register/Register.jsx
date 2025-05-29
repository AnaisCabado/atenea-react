import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import './Register.css';

function Register({ onClose }) {
    const { onRegister } = useContext(AuthContext);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setError("Las contraseñas no coinciden");
			return;
		}

		const result = await onRegister(name, lastName, username, email, password);
		if (result?.error) {
			setError(result.error);
		} else {
			onClose();
		}
	};

	return (
		<div className="register-modal">
			<div className="modal">
				<button className="close-button" onClick={onClose}>x</button>
				<h2>Registrarse</h2>
				<form onSubmit={handleSubmit}>
					<label>Nombre:
						<input type="text" autoFocus required value={name} onChange={(e) => setName(e.target.value)} />
					</label>
					<label>Apellido:
						<input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
					</label>
					<label>Nombre de usuario:
						<input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
					</label>
					<label>Email:
						<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
					</label>
					<label>Contraseña:
						<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
					</label>
					<label>Repetir contraseña:
						<input type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
					</label>
					{error && <p className="modal-error">{error}</p>}
					<button type="submit">Registrarse</button>
				</form>
			</div>
		</div>
	);
}

export default Register