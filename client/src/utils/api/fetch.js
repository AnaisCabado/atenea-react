const API_URL = "http://localhost:3000/api"

// Función genérica para realizar peticiones al servidor
export const fetchData = async (route, method, inputData = null) => {
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include", // Incluir cookies en las peticiones
    }
    
    if (inputData) {
        if (method === "get") {
            Object.keys(inputData).forEach(key => {
                url.searchParams.append(key, inputData[key]);
            })
        } else if (method === "post" || method === "put" || method === "patch") {
            fetchOptions.body = JSON.stringify(inputData);
        }
    }

    try {
        const result = await fetch(url.toString(), fetchOptions);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
        return ({ error: error.message })
    }
}

// Funciones específicas para cada operación de autenticación
export const login = (username, password) => {
    return fetchData("/login", "post", { username, password });
}

export const logout = () => {
    return fetchData("/logout", "post");
}

export const getProtected = () => {
    return fetchData("/protected", "get");
}