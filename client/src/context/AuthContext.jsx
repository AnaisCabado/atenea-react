import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../utils/api/auth";

const AuthContext = createContext({
    userData: {},
    onLogin: async () => { },
    onLogout: () => { },
});

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    // useEffect(() => {
    //     handleGetUserInfo();
    // }, [])
    // const handleGetUserInfo = async()=>{
    //     const result = await getUserInfo();
    //     console.log('user info', result);
    //     if(result.user){
    //         setUserData(result.user);
    //     }
    // };
    const handleLogin = async (email, password) => {
        const result = await login (email, password);
        if (result.error) {
            return result.error;
        } else {
            console.log('first', result);
            setUserData(result);
            console.log('last', userData);
            navigate('/');
            return null;
        }
    };
    const handleLogout = () => {
        logout();
        setUserData(null);
        navigate('/login');
    }
    return (
        <AuthContext.Provider value={{ userData:userData, onLogin: handleLogin, onLogout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthContext,
    AuthProvider
}