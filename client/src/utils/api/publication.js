import fetchData from "./fetch.js";

async function getAllPublications(){
    const publications = await fetchData('/publications');
    return publications;
}

async function getAllEvents(){
    const events = await fetchData('/events');
    return events;
}

// async function deletePublication(id){
//     const response = await fetchData('/publications/${id}', 'DELETE');
//     return response;
// }

async function createPublication(publicationData){
    const response = await fetchData('/publications/create', 'POST', publicationData);
    return response;
}

export {
    getAllPublications,
    // deletePublication
    getAllEvents,
    createPublication
}