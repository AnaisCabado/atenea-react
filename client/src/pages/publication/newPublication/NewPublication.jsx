import { useState, useEffect, useContext } from "react";
import { createPublication } from "../../../utils/api/publication";
import { PublicationContext } from "../../../context/PublicationContext";
import { AuthContext } from "../../../context/AuthContext";

import './NewPublication.css';

function newPublication() {
    const { userData } = useContext(AuthContext);
    const { addPublication } = useContext(PublicationContext);
    const [publicationData, setPublicationData] = useState({
        title: "",
        text: "",
        category: "event",
        date: ""
    });


    const handleTitle = (e) => {
        const newTitle = e.target.value;
        setPublicationData((oldPublication) => {
            return { ...oldPublication, title: newTitle }
        })
    }

    const handleText = (e) => {
        const newText = e.target.value;
        setPublicationData((oldPublication) => {
            return { ...oldPublication, text: newText }
        })
    }

    const handleCategory = (e) => {
        const newCategory = e.target.value;
        setPublicationData((oldPublication) => {
            return { ...oldPublication, category: newCategory }
        })
    }

    const handleDate = (e) => {
        const newDate = e.target.value;
        setPublicationData((oldPublication) => {
            return { ...oldPublication, date: newDate }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPublicationData((oldPublication) => {
            return { ...oldPublication, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userData || !userData.user_id) {
            console.error("User not logged in or missing user_id");
            return;
        }

        const fullPublicationData = {
            ...publicationData,
            user_id: userData.user_id
        };

        const response = await createPublication(fullPublicationData);
        console.log(response);

        if (response) {
            addPublication(response);
            setPublicationData({
                title: "",
                text: "",
                category: "event",
                date: ""
            });
        }
    };


    return (
        <article className="create-publication">
            <h1 className="create-publication__title">New Publication</h1>
            <section className="create-publication__form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={publicationData.title}
                        onChange={handleChange}
                        placeholder="Your event title"
                    />
                    <label htmlFor="text">Description</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={publicationData.text}
                        onChange={handleChange}
                        placeholder="Tell us about your event"
                    />
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        id="category"
                        value={publicationData.category}
                        onChange={handleChange}
                    >
                        <option value="event">Event</option>
                        <option value="post">Post</option>
                    </select>

                    {/* <label htmlFor="location">Location</label>
                    <input type="text"
                        name="location"
                        id="location"
                        value={publicationData.location}
                        onChange={handleChange}
                        placeholder="Location" /> */}

                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={publicationData.date}
                        onChange={handleChange}
                    />
                    <button>Create</button>
                </form>
            </section>
        </article>
    );
}

export default newPublication