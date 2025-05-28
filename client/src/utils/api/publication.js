import fetchData from "./fetch.js";

async function getAllPublications() {
    const data = await fetchData('/publications');
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

async function savePublication(publicationId, userId) {
    const res = await fetchData(`/publications/${publicationId}/save`, 'POST', {
        user_id: userId
    });

    if (res.error) {
        throw new Error('Error saving publication');
    }

    return res;
}

async function unsavePublication(publicationId, userId) {
  try {
    const response = await fetch(`http://localhost:3000/api/publications/${publicationId}/unsave`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })  // ojo: userId en body para identificar el usuario
    });

    if (!response.ok) {
      // Lee el texto de error para debug
      const errorText = await response.text();
      throw new Error(`Error unsaving publication: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error unsaving publication', error);
    throw error;  // Propaga para manejarlo donde se llame
  }
}


async function getSavedPublications(userId) {
  try {
    const response = await fetchData(`/publications/saved/${userId}`);
    
    if (response.error) {
      console.error('API error:', response.error);
      return [];
    }
    
    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.error("getSavedPublications error:", error);
    return [];
  }
}



export {
    getAllPublications,
    // deletePublication
    getAllEvents,
    getEventByDate,
    createPublication,
    savePublication,
    unsavePublication,
    getSavedPublications
}