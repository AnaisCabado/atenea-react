import './Home.css';
import PublicationList from "../publication/publicationList/PublicationList";
import { useEffect, useState } from 'react';
import fetchData from '../../utils/api/fetch';

function Home() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, [])
    const handleFetchData = async () => {
        const data = await fetchData('/publications');
        setPublications(data);
    }

    return (
        <article className="home-page">
            <img src="/src/assets/logotipo.svg" alt="logotipo" className='logotipo-home-page' />
            <PublicationList publications={publications} />
        </article>
    )
}

export default Home;