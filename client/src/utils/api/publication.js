import fetchData from "./fetch.js";

async function getAllPublications() {
  const data = await fetchData('/publications');
  return data;
}


async function getAllEvents() {
  const events = await fetchData('/events');
  return events;
}

async function getEventByDate(date) {
  try {
    const response = await fetch(`/api/events/${date}`);
    console.log(response)
    
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      const errorText = await response.text();  // puede venir como HTML
      throw new Error(`Error HTTP ${response.status}: ${errorText}`);
    }

    if (!contentType || !contentType.includes("application/json")) {
      const rawText = await response.text();
      throw new Error(`Respuesta no JSON: ${rawText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getEventByDate:", error.message);
    throw error;
  }
}



async function deletePublication(id){
    const response = await fetchData(`/publications/${id}/delete`, 'DELETE');
    return response;
}

async function createPublication(publicationData) {
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
    const response = await fetchData(`/publications/${publicationId}/unsave`, 'POST', {
      user_id: userId
    });

    if (response.error) {
      throw new Error('Error unsaving publication');
    }

    return response;
  } catch (error) {
    console.error('Error saving publication:', error);
    return response.status(500).json({
      error: 'Server error'
    })
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
  deletePublication,
  getAllEvents,
  getEventByDate,
  createPublication,
  savePublication,
  unsavePublication,
  getSavedPublications
}