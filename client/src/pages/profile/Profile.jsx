import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { users } from '../../utils/data';
import PublicationCard from '../../components/publicationCard/PublicationCard';
import { getAllPublications } from '../../utils/api/publication';

import './Profile.css';

function Profile() {
    const Navigate = useNavigate();

    const { username } = useParams();
    const [publications, setPublications] = useState([]);

    const user = users.find(user => user.username === username);

    useEffect(() => {
        const loadPublications = async () => {
            const allPublications = await getAllPublications();
            const userPublications = allPublications.filter(pub => pub.user_id === user.user_id);
            setPublications(userPublications);
        };
        loadPublications();
    }, [user.user_id]);

    return (
        <article className="user-profile">
            <section className="user-profile__header">
                <img src="https://placehold.co/200x100" alt={"AUX"} className="user-profile__header__img" />
                <img src="https://placehold.co/50x50" alt={"AUX"} className="user-profile__img" />
                <button className="back-button" onClick={() => Navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                </button>
            </section>

            <section className="user-profile__data">
                <div className="data--info">
                    <p className="data--name-lastname">{user.first_name} {user.last_name}</p> {/* TODO CAMBIAR */}
                    <p className="data--username">@{user.username}</p> {/* TODO CAMBIAR */}
                </div>
                <p className="data--art-category">category</p> {/* TODO CAMBIAR */}
                <p className="data--biography">biography</p> {/* TODO CAMBIAR */}
                <p className="data--location">location</p> {/* TODO CAMBIAR */}
                <div className="data--follow">
                    <p className="data--following">following</p> {/* TODO CAMBIAR */}
                    <p className="data--followers">followers</p> {/* TODO CAMBIAR */}
                </div>
            </section>

            <section className="user-profile__buttons">
                <button className="follow-button">Follow</button>
                <button className="chat-button">Send message</button>
            </section>

            <section className="user-profile__publications">
                <h2>Publications</h2>
                <div className="user-profile__publications--container">
                    {publications.map((publication) => (
                        <PublicationCard key={publication.publication_id} publication={publication} />
                    ))}
                </div>
            </section>
        </article>
    );
}

export default Profile;