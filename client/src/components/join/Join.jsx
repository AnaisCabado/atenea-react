import { useNavigate, useParams } from 'react-router-dom';
import { publications } from '../../utils/data';

function Join() {
    const Navigate = useNavigate();

    const { publicationId } = useParams();

    const publication = publications.find(pub => pub.publication_id === parseInt(publicationId));
    const user = users.find(user => user.user_id === publication.user_id);

    return(
        <article className="join">
            <button className="back-button" onClick={() => Navigate(-1)}>Close</button>
            <section className="join-text">
                <p>Wanna join to: {publication.title}?</p>
            </section>
            <button className="join-button">Join</button>
        </article>
    )
}

export default Join;