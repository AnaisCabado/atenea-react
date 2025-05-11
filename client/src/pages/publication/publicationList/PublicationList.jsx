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
        console.log('hola')
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            console.log('holiwi')
            return params;
        })
    }

    const handleRemoveProduct = async (product_id) => {
        const response = await deleteProduct(product_id);
        console.log("delete", response)
        if (response.error) {
            // podemos mostrar que ha habido un error.
        } else {
            const newProducts = products.filter(product => product.product_id !== product_id);
            setProducts(newProducts);
        }
    }

    const filteredPublications = publications.filter(publication => publication.title.toLowerCase().includes(searchTerm.toLowerCase())); /* TODO SEARCH BACK */
    console.log(filteredPublications)

    return (
        <section className="search-publications">
            <SearchFilter onSearch={handleSearchTerm} />
            <div className="publication-list">
            {filteredPublications.map(publication => {
                return <PublicationCard onRemove={handleRemoveProduct} publication={publication} key={publication.publication_id} />
            })}
            </div>
        </section>
    )
}

export default PublicationList;