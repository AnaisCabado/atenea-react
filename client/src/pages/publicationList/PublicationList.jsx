import { useState, useEffect } from 'react';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import { getAllPublications } from '../../utils/api/publication';

import './PublicationList.css';

function PublicationList({publications}) {
    const [publication, setPublication] = useState([]);

    useEffect(()=>{
        handleLoadProducts();
    },[])
    const handleLoadProducts = async () => {
        const data = await getAllPublications()
        setPublication(data);
    }
    return(
        <section className="publication-list">
            {publications.map(publication=>{
                return <PublicationCard publication={publication} key={publication.publication_id} />
            })}
        </section>
    )
}   

export default PublicationList;