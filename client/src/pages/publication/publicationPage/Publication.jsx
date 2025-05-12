import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publications, users, attachUsernameToPublications } from '../../../utils/data';

import './Publication.css';

function Publication() {
    const Navigate = useNavigate();

    const { publicationId } = useParams();

    const publication = publications.find(pub => pub.publication_id === parseInt(publicationId));
    const user = users.find(user => user.user_id === publication.user_id);

    const enrichedPublications = attachUsernameToPublications(publications, users);
    const enriched = enrichedPublications.find(pub => pub.publication_id === publication.publication_id);


    return (
        <article className="publication-page">
            <section className="publication__header">
                <img src="https://placehold.co/200x100" alt={"AUX"} className="publication__header__img" />
                <button className="back-button" onClick={() => Navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>
            </section>

            <section className="publication__data">
                <div className="publication-user-data--info">
                    <NavLink to={`/users/${enriched?.username}`}>
                        <div className="data-user-info">
                            <img src="https://placehold.co/50x50" alt={"AUX"} className="user-img" />
                            <div className="publication-user">
                                <p className="data--name-lastname">{user.first_name} {user.last_name}</p>
                                <p className="data--username">@{user.username}</p>
                            </div>
                        </div>
                    </NavLink>
                    <p className="data--publication-date">
                        {new Date(publication.created_at).toISOString().slice(0, 10).replaceAll("-", "/")}
                    </p>
                </div>
                <p className="data--title">{publication.title} </p> {/* TODO CAMBIAR */}
                <p className="data--text">{publication.text} </p> {/* TODO CAMBIAR */}
                <div className="data--follow">
                    <p className="data--location">location</p> {/* TODO CAMBIAR */}
                    {/* <p className="data--event-date">date</p>  */}
                </div>
            </section>

            {/* <section className="publication__buttons">
                <button className="join-button">Join</button>
            </section> */}
        </article>
    );
}

export default Publication;