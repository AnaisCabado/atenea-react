import { useState, useEffect } from "react";
import { createPublication } from "../../../utils/api/publication";

import './NewPublication.css';

function newPublication() {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createPublication(publicationData);
        console.log(response);
    }

    return (
        <article className="create-publication">
            <h1 className="create-publication__title">New Publication</h1>

            <section className="create-publication__form">
                <form onSubmit={handleSubmit} action="">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={handleTitle} placeholder="Your event title" />
                    <label htmlFor="text">Description</label>
                    <input type="text" name="text" id="text" onChange={handleText} placeholder="Tell us about your event" />
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={handleCategory}>
                        <option value="event">Event</option>
                        <option value="post">Post</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />

                    <button>Create</button>
                </form>
            </section>
        </article>
    )
}

export default newPublication