import { useState, useEffect } from "react";
import { getSavedPublications } from "../../utils/api/publication";
import PublicationCard from "../publicationCard/PublicationCard";

// import './SavedPublications.css';

function SavedPublications({ publications, handleSearchTerm }) {
	if (!publications) return null;

	if (publications.length === 0) {
		return <p>No tienes favoritos todavía.</p>;
	}

	return (
		<div>
			<h2>Publicaciones guardadas</h2>
			<ul className="favorites-list">
				{publications.map((pub) => (
					<li key={pub.publication_id}>
						<PublicationCard publication={pub} isSaved={true} />
					</li>
				))}
			</ul>
		</div>
	);
}


export default SavedPublications;
