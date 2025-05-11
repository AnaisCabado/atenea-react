import { useEffect, useState } from "react";
import { getUserInfo } from "../../../utils/api/auth";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import fetchData from "../../../utils/api/fetch";

import './MyProfile.css';

function MyProfile() {
    const [user, setUser] = useState(null);

    const {userData, onLogout}  = useContext(AuthContext);
    const navigate = useNavigate();

    const handleFetchData = async () => {
        setUser(await fetchData(`/users/${userData.user_id}`));
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
                <button className="edit-profile-button">Edit profile</button>
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
                <div className="my-user-profile__publications--container">                </div>
            </section>
        </article>
    );
}

export default MyProfile;