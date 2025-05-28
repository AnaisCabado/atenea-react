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

    const handleShowAll = () => {
        setSearchTerm('');
        setSearchParams(params => {
            params.delete("search");
            return params;
        });
    };

    const filteredPublications = publication.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); /* TODO SEARCH BACK */

    return (
        <section className="search-publications">
            <SearchFilter onSearch={handleSearchTerm} />
            <button onClick={handleShowAll}>TODAS LAS PUBLICACIONES</button>
            <div className="publication-list">
            {filteredPublications.map(publication => {
                return <PublicationCard publication={publication} key={publication.publication_id} />
            })}
            </div>
        </section>
    )
}

export default PublicationList;