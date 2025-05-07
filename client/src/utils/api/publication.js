import fetchData from "./fetch";

async function getAllPublications(){
    const publications = await fetchData('/publications');
    return publications;
}

export {
    getAllPublications
}