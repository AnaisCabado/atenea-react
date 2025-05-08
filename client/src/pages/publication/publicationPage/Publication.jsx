import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { publications, users } from '../../../utils/data';

import './Publication.css';

function Publication() {
    const Navigate = useNavigate();

    const { publicationId } = useParams();

    const publication = publications.find(pub => pub.publication_id === parseInt(publicationId));
    const user = users.find(user => user.user_id === publication.user_id);

    return (
        <article className="publication-page">
            <section className="publication__header">
                <img src="https://placehold.co/200x100" alt={"AUX"} className="publication__header__img" />
                <button className="back-button" onClick={() => Navigate(-1)}>Back</button>
            </section>

            <section className="publication__data">
                <div className="data--info">
                    <div className="data-user-info">
                        <img src="https://placehold.co/50x50" alt={"AUX"} className="user-img" />
                        <div className="publication-user">
                            <p className="data--name-lastname">{user.first_name} {user.last_name}</p> 
                            <p className="data--username">@{user.username}</p> 
                        </div>
                    </div>
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

            <section className="publication__buttons">
                <button className="join-button">Join</button>
            </section>
        </article>
    );
}

export default Publication;