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
async function getUserInfo(){
    const result = await fetchData('/users/1');
    return result;
}

export {
    login,
    logout,
    getUserInfo
}