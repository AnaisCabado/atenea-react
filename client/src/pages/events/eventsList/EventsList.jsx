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
    console.log('Publications recibidas:', publications);
    console.log('Es array?', Array.isArray(publications));
    console.log('Tipo:', typeof publications);
    
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Filtrar por fecha seleccionada - versión temporal con filtro local
  useEffect(() => {
    if (selectedDate) {
      handleLoadEventByDate();
    }
  }, [selectedDate]);

  const handleLoadEventByDate = async () => {
    try {
      setIsLoading(true);
      console.log('Buscando eventos para fecha:', selectedDate);
      
      if (!Array.isArray(publications)) {
        console.error('Publications no es un array:', publications);
        setFilteredEvents([]);
        return;
      }
      
      const dataForDate = await getEventByDate(selectedDate);
      console.log('Datos encontrados:', dataForDate);
      
      if (!dataForDate || dataForDate.length === 0) {
        console.log('No se encontraron eventos para esta fecha');
        setFilteredEvents([]);
        return;
      }
      
      // Verificar si son eventos o publicaciones
      const firstItem = dataForDate[0];
      if (firstItem.publication_id) {
        // Son eventos, filtrar publicaciones
        const filtered = publications.filter(publication =>
          dataForDate.some(event => event.publication_id === publication.publication_id)
        );
        setFilteredEvents(filtered);
      } else {
        // Ya son publicaciones directamente
        setFilteredEvents(dataForDate);
      }
      
      console.log('Publicaciones filtradas:', filteredEvents);
    } catch (error) {
      console.error('Error fetching events by date:', error);
      console.error('Error details:', {
        message: error.message,
        status: error.status || 'No status',
        selectedDate
      });
      setFilteredEvents([]); // Si hay error, mostrar array vacío
    } finally {
      setIsLoading(false);
    }
  };

  // Filtrar por término de búsqueda cuando no hay fecha seleccionada
  useEffect(() => {
    if (!selectedDate && searchTerm && Array.isArray(publications)) {
      const filtered = publications.filter(publication =>
        publication.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else if (!selectedDate && !searchTerm && Array.isArray(publications)) {
      // Si no hay fecha ni término de búsqueda, mostrar todas
      setFilteredEvents(publications);
    }
  }, [searchTerm, publications, selectedDate]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    // Actualizar URL params
    setSearchParams(params => {
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }
      return params;
    });
  };

  return (
    <article className="events-list-page">
      <CalendarView 
        events={publications} 
        onDateChange={handleDateChange}
        selectedDate={selectedDate}
      />
      
      <div className="controls">
        <input
          type="text"
          placeholder="Buscar publicaciones..."
          value={searchTerm}
          onChange={handleSearchChange}
          disabled={selectedDate !== null} // Deshabilitar cuando hay fecha seleccionada
        />
      </div>

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