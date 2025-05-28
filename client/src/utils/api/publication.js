import fetchData from "./fetch.js";

async function getAllPublications() {
    const data = await fetchData('/publications');
    console.log('api', data)

    return data;
}


async function getAllEvents(){
    const events = await fetchData('/events');
    return events;
}

async function getEventByDate(date){
    const data = await fetchData(`/events/${date}`);
    return data.events || [];
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

async function getSavedPublications(userId) {
    try {
        const response = await fetch(`/api/publications/saved/${userId}`);

        const text = await response.text(); // primero lee como texto
        console.log("Raw response text:", text); // 🔍 inspección

        try {
            const data = JSON.parse(text); // intenta parsear manualmente
            return Array.isArray(data) ? data : [];
        } catch (parseError) {
            console.error("JSON parse failed:", parseError);
            return [];
        }

    } catch (error) {
        console.error("getSavedPublications error:", error);
        return [];
    }
};



export {
    getAllPublications,
    // deletePublication
    getAllEvents,
    getEventByDate,
    createPublication,
    savePublication,
    getSavedPublications
}