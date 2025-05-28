import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import CalendarView from '../../../components/calendar/Calendar';
import { getAllEvents, getEventByDate } from '../../../utils/api/publication';

import './EventsList.css';

function EventsList({ publications }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        handleLoadEvents();
    }, [])

    const handleLoadEvents = async () => {
        try {
            const data = await getAllEvents();
            setEvents(data);
        } catch (error) {
            console.error('Error fetching publications:', error);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        if (selectedDate) {
            handleLoadEventByDate();
        }
    }, [selectedDate]);

    const handleLoadEventByDate = async () => {
        try {
            const data = await getEventByDate(selectedDate);
            setEvents(data);
            console.log('selectedDate:', selectedDate);
            console.log('data:', data);
            console.log('events:', events);
        } catch (error) {
            console.error('Error fetching publications:', error);
        }
    };



    const selectedPublications = publications.filter(publication =>
        events.some(event => event.publication_id === publication.publication_id)
    );

    const filteredPublications = selectedDate
        ? selectedPublications
        : publications.filter(publication =>
            publication.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleShowAll = () => {
        setSearchTerm('');
        setSelectedDate(null); // <-- limpia filtro de fecha
        setSearchParams(params => {
            params.delete("search");
            return params;
        });
    };


    return (
        <article className="events-list-page">
            <CalendarView events={publications} onDateChange={handleDateChange} />
            <button onClick={handleShowAll}>TODAS LAS PUBLICACIONES</button>
            <section className="events-list">
                {filteredPublications.length === 0 ? (
                    <p>No events found for the selected date.</p>
                ) : (
                    filteredPublications.map(publication => (
                        <PublicationCard
                            publication={publication}
                            key={publication.publication_id}
                        />
                    ))
                )}
            </section>
        </article>
    );
}

export default EventsList;
