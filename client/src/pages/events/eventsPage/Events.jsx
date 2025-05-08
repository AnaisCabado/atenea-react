// import './Events.css';
import EventsList from '../eventsList/EventsList';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../../utils/api/publication';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        handleFetchData();
    }, [])
    const handleFetchData = async () => {
        const data = await getAllEvents();
        setEvents(data);
    }

    return (
        <div>
            <EventsList publications={events} />
        </div>
    )
}

export default Events;