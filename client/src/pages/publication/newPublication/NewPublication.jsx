import { useState, useEffect } from "react";
import { createPublication } from "../../../utils/api/publication";

function newPublication() {
    const [publicationData, setPublicationData] = useState({
        title: "",
        text: "",
        category: "event"
        // date
    });
    

    const handleTitle = (e)=> {
        const newTitle = e.target.value;
        setPublicationData((oldPublication) => {
            return {...oldPublication,title:newTitle}
        })
    }

    const handleText = (e)=> {
        const newText = e.target.value;
        setPublicationData((oldPublication) => {
            return {...oldPublication,text:newText}
        })
    }

    const handleCategory = (e)=> {
        const newCategory = e.target.value;
        setPublicationData((oldPublication) => {
            return {...oldPublication,category:newCategory}
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await createPublication(publicationData);
        console.log(response);
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" onChange={handleTitle} />
            <label htmlFor="text">text</label>
            <input type="text" name="text" id="text" onChange={handleText} />
            <label htmlFor="category">category</label>
            <input type="text" name="category" id="category" onChange={handleCategory} />
            {/* <label htmlFor="date">date</label> */}

            <button>Create</button>
        </form>
    )
}

export default newPublication