// import './Events.css';
import PublicationList from "../publication/publicationList/PublicationList";
import { useEffect, useState } from 'react';
import fetchData from '../../utils/api/fetch';

function Events() {
    const [publications,setPublications] = useState([]);

    useEffect(()=>{
        handleFetchData();
    },[])
    const handleFetchData = async()=>{
    const data = await fetchData('/publications');
    setPublications(data);
  }

    return (
        <div>
            <PublicationList publications={publications}/>
        </div>
    )
}

export default Events;