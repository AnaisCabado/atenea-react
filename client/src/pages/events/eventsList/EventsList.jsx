import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import PublicationCard from '../../../components/publicationCard/PublicationCard';
import CalendarView from '../../../components/calendar/Calendar';
import { getEventByDate } from '../../../utils/api/publication';

import './EventsList.css';

function EventsList({ publications }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        if (selectedDate) {
            handleLoadEvent();
        }
    }, [selectedDate]);

    const handleLoadEvent = async () => {
        try {
            const data = await getEventByDate(selectedDate);
            console.log('Eventos recibidos:', data);

            const selectedDateStr = new Date(selectedDate).toLocaleDateString('en-CA');

            const filteredData = data.filter(event => {
                const eventDateStr = new Date(event.date_time).toLocaleDateString('en-CA');
                return eventDateStr === selectedDateStr;
            });

            setEvents(filteredData);
        } catch (error) {
            console.error('Error fetching publications:', error);
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const selectedPublications = publications.filter(publication =>
        events.some(event => event.publication_id === publication.publication_id)
    );

    const filteredPublications = selectedDate
        ? selectedPublications
        : publications.filter(publication =>
            publication.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <article className="events-list-page">
            <CalendarView events={publications} onDateChange={handleDateChange} />
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
