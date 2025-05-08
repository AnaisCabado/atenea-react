import { NavLink } from 'react-router-dom';
import './PublicationCard.css';
import { publications, users, attachUsernameToPublications } from '../../utils/data';

function PublicationCard({publication}) {

    const enrichedPublications = attachUsernameToPublications(publications, users);
    const enriched = enrichedPublications.find(pub => pub.publication_id === publication.publication_id);

    return(
        <article className="article publication">
            <section className="publication-user-data">
                <NavLink to={`/users/${enriched?.username}`}>
                    <div className="user-data">
                        <img src="https://placehold.co/50x50" alt={"AUX"} className="user-data__img" />
                        <p className="user-data__username">@{enriched?.username}</p>  {/* TODO CAMBIAR */}
                    </div>
                </NavLink>

                <p className="publication-date">
                    {new Date(publication.created_at).toISOString().slice(0, 10).replaceAll("-", "/")}
                </p>
            </section>
            <section className="publication-img">
                <img src="https://placehold.co/300x150" className="logo" alt={"AUX"} />
            </section>
            <section className="publication-data">
                <NavLink to={`/publications/${publication.publication_id}`}>
                    <h2>{publication.title}</h2>
                </NavLink>
                <p className="publication-text">{publication.text}</p>
                <p className="publication-category">{publication.category}</p>
            </section>
            <section className="publication_buttons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                </svg>
            </section>
        </article>
    )
}

export default PublicationCard;