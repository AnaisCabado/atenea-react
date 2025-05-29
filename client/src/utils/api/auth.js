import fetchData from "./fetch.js";

async function login(email, password) {
    const data = {
        email,
        password
    }
    const result = await fetchData('/users/login', 'POST', data);
    return result;
}
async function logout(){
    const result = await fetchData('/logout', 'POST');
}

async function getUserById(id) {
    const result = await fetchData(`/users/${id}`, 'GET');
    return result;
}

function getUserImage(image) {
    return 'http://localhost:3000/images/' + 'placeholder.png'/* image */;
}

async function register(name, lastName, username, email, password) {
	try {
		const result = await fetchData("/users/register", "POST", {
            name, 
            lastName,
			username,
			email,
			password
		});
		if (result.token) {
			saveToken(result.token);
		}
		return result;
	} catch (error) {
		return { error: error.message };
	}
}

export {
    login,
    logout,
    getUserById,
    getUserImage,
    register
}