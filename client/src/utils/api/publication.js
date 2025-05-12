import fetchData from "./fetch.js";

async function getAllPublications() {
    const data = await fetchData('/publications');

    // Opcional: chequear si hubo un error personalizado
    if (data.status && data.status !== 200) {
        throw new Error('Failed to fetch publications');
    }

    return data;
}


async function getAllEvents(){
    const events = await fetchData('/events');
    return events;
}

async function getEventByDate(date){
    const events = await fetchData(`/events/${date}`);
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

async function savePublication(id) {
    const res = await fetchData(`/publications/${id}/save`, 'POST');

    if (res.error) {
        throw new Error('Error saving publication');
    }

    return res;
}

export {
    getAllPublications,
    // deletePublication
    getAllEvents,
    getEventByDate,
    createPublication,
    savePublication
}