import PublicationCard from '../publicationCard/PublicationCard';
import './PublicationList.css';

function PublicationList({publications}) {
    return(
        <section className="publication-list">
            {publications.map(publication=>{
                return <PublicationCard publication={publication} key={publication.publication_id} />
            })}
        </section>
    )
}   

export default PublicationList;