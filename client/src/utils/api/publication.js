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
  console.log('date',date)
  const data = await fetchData(`/events/${date}`);
  console.log('data',data)
  return data;
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