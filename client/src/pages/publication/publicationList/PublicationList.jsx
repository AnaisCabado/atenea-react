import { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import { getAllPublications } from '../../../utils/api/publication';
import SearchFilter from "../../../components/searchFilter/SearchFilter";

import './PublicationList.css';

function PublicationList() {
    const [publication, setPublication] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    useEffect(() => {
        handleLoadPublications();
    }, [])
    
    const handleLoadPublications = async () => {
        try {
            const data = await getAllPublications();
            console.log('que funcione', data)
            setPublication(data);
        } catch (error) {
            console.error('Error fetching publications:', error);            
        }
    };

    const handleSearchTerm = (newTerm) => {
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            return params;
        })
    };

    const filteredPublications = publication.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); /* TODO SEARCH BACK */
    console.log(filteredPublications)

    return (
        <section className="search-publications">
            <SearchFilter onSearch={handleSearchTerm} />
            <div className="publication-list">
            {filteredPublications.map(publication => {
                return <PublicationCard publication={publication} key={publication.publication_id} />
            })}
            </div>
        </section>
    )
}

export default PublicationList;