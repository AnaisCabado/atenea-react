import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../utils/api/auth";
import { register } from "../utils/api/auth";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => { },
    onLogout: () => { },
});

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, [])
    
    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        if (result.error) {
            return result.error;
        } else {
            setUserData(result);

            sessionStorage.setItem('user', JSON.stringify(result));

            navigate('/');
            return null;
        }
    };
    const handleLogout = () => {
        logout();
        setUserData(null);
        navigate('/login');
    }

    const handleRegister = async (name, lastName, username, email, password) => {
		const result = await register(name, lastName, username, email, password);
		
		if (result.error) {
			return {error: result.error};
		} else {
			setUserData({ ...result.user, isAdmin: result.user.role === "admin" });
			navigate("/");
			return {success: true};
		}
	}

    return (
        <AuthContext.Provider value={{ userData: userData, onLogin: handleLogin, onLogout: handleLogout, onRegister: handleRegister }}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthContext,
    AuthProvider
}