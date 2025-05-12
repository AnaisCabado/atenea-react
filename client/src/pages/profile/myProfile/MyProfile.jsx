import { useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../../../utils/api/fetch";

import PublicationCard from '../../../components/publicationCard/PublicationCard';
import { getAllPublications } from '../../../utils/api/publication';


import './MyProfile.css';

function MyProfile() {
    const [user, setUser] = useState(null);

    const { userData, onLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [publications, setPublications] = useState([]);

    const handleFetchData = async () => {
        const userResponse = await fetchData(`/users/${userData.user_id}`);
        const allPublications = await getAllPublications();
        const userPublications = allPublications.filter(pub => pub.user_id === userData.user_id);

        setUser(userResponse);
        setPublications(userPublications);
    }

    useEffect(() => {
        if (userData === null || userData === undefined) {
            navigate('/login');
        };
        handleFetchData()
    }, [userData]);

    if (!userData) {
        return null;
    };

    return (
        <article className="my-user-profile">
            <section className="my-user-profile__header">
                <img src="https://placehold.co/200x100" alt={"AUX"} className="my-user-profile__header__img" />
                <img src="https://placehold.co/50x50" alt={"AUX"} className="my-user-profile__img" />
                <button className="edit-profile-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                    </svg>
                </button>
            </section>

            <section className="my-user-profile__data">
                <div className="data--info">
                    <p className="data--name-lastname">{user && user.first_name} {user && user.last_name}</p> {/* TODO CAMBIAR */}
                    <p className="data--username">@{user && user.username}</p> {/* TODO CAMBIAR */}
                </div>
                <p className="data--art-category">category</p> {/* TODO CAMBIAR */}
                <p className="data--biography">biography</p> {/* TODO CAMBIAR */}
                <p className="data--location">location</p> {/* TODO CAMBIAR */}
                <div className="data--follow">
                    <p className="data--following">following</p> {/* TODO CAMBIAR */}
                    <p className="data--followers">followers</p> {/* TODO CAMBIAR */}
                </div>
            </section>

            <section className="my-user-profile__buttons">
                <button className="saved-dates-button">Saved dates</button>
                <button className="logout-button" onClick={onLogout}>Logout</button>
            </section>

            <section className="my-user-profile__publications">
                <h2>Publications</h2>
                <div className="my-user-profile__publications--container">
                    {publications.map(pub => (
                        <PublicationCard key={pub.publication_id} publication={pub} />
                    ))}
                </div>
            </section>
        </article>
    );
}

export default MyProfile;