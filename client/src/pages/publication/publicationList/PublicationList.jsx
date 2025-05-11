import { useState, useEffect } from 'react';
import { useLoaderData, useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import { getAllPublications } from '../../../utils/api/publication';
import SearchFilter from "../../../components/searchFilter/SearchFilter";

import './PublicationList.css';

function PublicationList({ publications }) {
    const [publication, setPublication] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    useEffect(() => {
        handleLoadPublications();
    }, [])
    const handleLoadPublications = async () => {
        const data = await getAllPublications()
        setPublication(data);
    }

    const handleSearchTerm = (newTerm) => {
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            return params;
        })
    };

    const filteredPublications = publications.filter(publication => publication.title.toLowerCase().includes(searchTerm.toLowerCase())); /* TODO SEARCH BACK */
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