import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../../../utils/api/auth';

import './Publication.css';

function Publication() {
    const navigate = useNavigate();
    const { publicationId } = useParams();

    const [publication, setPublication] = useState(null);
    const [user, setUser] = useState(null);

    // Cargar la publicación
    useEffect(() => {
        async function fetchPublication() {
            try {
                const res = await fetch(`http://localhost:3000/api/publications/${publicationId}`);
                if (!res.ok) throw new Error('Failed to fetch publication');
                const data = await res.json();
                setPublication(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPublication();
    }, [publicationId]);

    // Cargar el usuario cuando la publicación esté disponible
    useEffect(() => {
        if (!publication?.user_id) return;

        async function fetchUser() {
            try {
                const data = await getUserById(publication.user_id);
                setUser(data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        fetchUser();
    }, [publication]);

    if (!publication || !user) return <div>Loading...</div>;

    return (
        <article className="publication-page">
            <section className="publication__header">
                <img src="https://placehold.co/200x100" alt="AUX" className="publication__header__img" />
                <button className="back-button" onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>
            </section>

            <section className="publication__data">
                <div className="publication-user-data--info">
                    <NavLink to={`/users/${user.username}`}>
                        <div className="data-user-info">
                            <img
                                src={user.image}
                                alt="Imagen de usuario"
                                className="user-img"
                            />
                            <div className="publication-user">
                                <p className="data--name-lastname">{user.first_name} {user.last_name}</p>
                                <p className="data--username">@{user.username}</p>
                            </div>
                        </div>
                    </NavLink>
                    <p className="data--publication-date">
                        {new Date(publication.created_at).toLocaleDateString('en-CA').slice(0, 10)}
                    </p>
                </div>
                <p className="data--title">{publication.title}</p>
                <p className="data--text">{publication.text}</p>
                <p className="data--location">{publication.location || 'No location'}</p>
                {publication.category === "event" && publication.date_time && (
                    <>
                        <p className="data--event-date">
                            Evento: {new Date(publication.date_time).toLocaleDateString('en-CA')}
                        </p>
                        <button>Join</button>
                    </>
                )}

            </section>
        </article>
    );
}

export default Publication;
