import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import './SearchFilter.css';

function SearchFilter({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');
    const timeoutRef = useRef(null);
    const handleSearch = (e) => {
        const data = e.target.value;

        clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(()=>{
            console.log('search',data);
            onSearch(data);
        },500);
        setSearchTerm(data);
    };


    return (
        <section className="search-bar">
            <div className="search-svg-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <input onChange={handleSearch} type="text" placeholder="Search for publications" />
            </div>
        </section>
    )
};

export default SearchFilter;