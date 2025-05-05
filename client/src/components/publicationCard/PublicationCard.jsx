import './PublicationCard.css';

function PublicationCard({publication}) {
    return(
        <article className="article publication">
            <section className="publication-img">
                <img src={publication.img} alt={publication.title} />
            </section>
            <section className="publication-data">
                <h1>{publication.title}</h1>
                <p className="publication-description">{publication.description}</p>
                <p className="publication-user">{publication.user}</p>
                <p className="publication-date">{publication.date}</p>
            </section>
        </article>
    )
}

export default PublicationCard;