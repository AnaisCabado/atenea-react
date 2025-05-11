import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import CalendarView from '../../../components/calendar/Calendar';
import { events } from '../../../utils/data';

// import './EventsList.css';

function EventsList({ publications }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };

    const enrichedPublications = publications
        .filter(pub => pub.category === 'event')
        .map(pub => {
            const event = events.find(ev => ev.publication_id === pub.publication_id);
            return {
                ...pub,
                date_time: event?.date_time || null
            };
        });

    const filteredPublications = selectedDate
        ? enrichedPublications.filter(publication => {
            const selectedDateObj = new Date(selectedDate);
            if (isNaN(selectedDateObj)) {
                console.error("Invalid date_time in publication:", selectedDate);
                return false;
            }
            const publicationDate = new Date(publication.date_time);
            if (isNaN(publicationDate)) {
                console.error("Invalid date_time in publication:", publication.date_time);
                return false;
            }

            const publicationDateStr = publicationDate.toLocaleDateString('en-CA');
            const selectedDateStr = selectedDateObj.toLocaleDateString('en-CA');
            return publicationDateStr === selectedDateStr;
        })
        : enrichedPublications.filter(publication =>
            publication.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleSearchTerm = (newTerm) => {
        setSearchTerm(newTerm);
        setSearchParams(params => {
            params.set("search", newTerm);
            return params;
        });
    };

    return (
        <article className="events-list">
            <CalendarView events={publications} onDateChange={handleDateChange} />
            {/* Aquí deberías mostrar los eventos filtrados según la fecha */}
            {filteredPublications.length === 0 ? (
                <p>No events found for the selected date.</p>
            ) : (
                filteredPublications.map(publication => {
                    return <PublicationCard publication={publication} key={publication.publication_id} />
                })
            )}
        </article>
    );
}

export default EventsList;
