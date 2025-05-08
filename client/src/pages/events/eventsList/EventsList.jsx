import { useState, useEffect } from 'react';
import { useLoaderData, useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import SearchFilter from "../../../components/searchFilter/SearchFilter";

// import './EventsList.css';

function EventsList({publications}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');


    const handleSearchTerm = (newTerm)=>{
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search",newTerm);
            return params;
        })

    }

    const filteredPublications = publications.filter(publication=> publication.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return(
        <section className="publication-list">
            <SearchFilter onSearch={handleSearchTerm}/>
            {publications.map(publication=>{
                return <PublicationCard publication={publication} key={publication.publication_id} />
            })}
        </section>
    )
}   

export default EventsList;