import fetchData from "./fetch.js";

async function getAllPublications(){
    const publications = await fetchData('/publications');
    return publications;
}

// async function deletePublication(id){
//     const response = await fetchData('/publications/${id}', 'DELETE');
//     return response;
// }

export {
    getAllPublications,
    // deletePublication
}