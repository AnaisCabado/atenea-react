import { useContext, useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import { getSavedPublications } from '../../../utils/api/publication';

// import './SavedPublications.css';

function SavedPublications() {
    const navigate = useNavigate();
    const [publications, setPublications] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const { userData } = useContext(AuthContext);

    useEffect(() => {
        if (userData) {
            handleLoadSavedPublications();
        }
    }, [userData]);

    const handleLoadSavedPublications = async () => {
        try {
            const data = await getSavedPublications(userData.user_id);
            setPublications(Array.isArray(data) ? data : []); // <-- Fallback a array vacío
        } catch (error) {
            console.error('Error fetching saved publications:', error);            
            setPublications([]); // <-- Evita estado nulo ante error
        }
    };
    

    const handleSearchTerm = (newTerm) => {
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            return params;
        });
    };

    const filteredPublications = (publications || []).filter(pub => 
        pub.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    

    return (
        <section className="saved-publications">
            <section className="saved__header">
                <button className="back-button" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>
            </section>
            <div className="publication-list">
                {filteredPublications.map(publication => (
                    <PublicationCard publication={publication} key={publication.publication_id} />
                ))}
            </div>
        </section>
    );
}

export default SavedPublications;