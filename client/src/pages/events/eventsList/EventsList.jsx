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
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Cargar eventos iniciales
  useEffect(() => {
    handleLoadEvents();
  }, []);

  // Inicializar filteredEvents con todas las publicaciones
  useEffect(() => {
    if (Array.isArray(publications) && publications.length > 0 && filteredEvents.length === 0) {
      setFilteredEvents(publications);
    } else if (Array.isArray(publications) && publications.length === 0) {
      setFilteredEvents([]);
    }
  }, [publications]);

  const handleLoadEvents = async () => {
    try {
      setIsLoading(true);
      const data = await getAllEvents();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDateChange = async (date) => {
    if (!date) {
      setSelectedDate(null);
      setFilteredEvents(events);
      return;
    }

    setSelectedDate(date);
    console.log(date)

    const filtered = await getEventByDate(date);
    console.log('filtered',filtered)

    const publicationIds = filtered.map(event => event.publication_id);

    const filteredPublications = publications.filter(pub =>
      publicationIds.includes(pub.publication_id)
    );

    setFilteredEvents(filteredPublications);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Actualizar URL params
    setSearchParams(params => {
      params.set("search", term);
      return params;
    });

    const filtered = publications.filter(publication =>
      publication.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <article className="events-list-page">
      <section className="search-bar">
        <div className="search-svg-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input onChange={handleSearchChange} type="text" placeholder="Search for events" />
        </div>
      </section>

      <CalendarView
        events={publications}
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
      />

      {selectedDate && (
        <p>Mostrando eventos para: {selectedDate}</p>
      )}

      <section className="events-list">
        {isLoading ? (
          <p>Cargando...</p>
        ) : filteredEvents.length === 0 ? (
          <p>
            {selectedDate
              ? `No se encontraron eventos para la fecha ${selectedDate}.`
              : "No se encontraron publicaciones."
            }
          </p>
        ) : (
          filteredEvents.map(publication => (
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