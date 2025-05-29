import { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css';

function CalendarView({ events, onDateChange, selectedDate }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    
    // Formatear fecha como YYYY-MM-DD para consistencia
    const selectedDateStr = selectedDate.toLocaleDateString('en-CA');
    console.log('Fecha seleccionada:', selectedDateStr);
    
    if (onDateChange && typeof onDateChange === 'function') {
      onDateChange(selectedDateStr);
    }
  };

  // Función para determinar si una fecha tiene eventos
  const hasEvents = (date) => {
    if (!events || !Array.isArray(events)) return false;
    
    const dateStr = date.toLocaleDateString('en-CA');
    return events.some(event => {
      // Aquí deberías ajustar según cómo esté estructurada tu fecha en los eventos
      // Asumiendo que tienes un campo 'event_date' o similar
      const eventDate = new Date(event.event_date || event.date);
      return eventDate.toLocaleDateString('en-CA') === dateStr;
    });
  };

  return (
    <section className="calendar-view">
      <Calendar 
        onChange={handleDateChange} 
        value={date}
        tileClassName={({ date }) => {
          // Agregar clase CSS para fechas con eventos
          return hasEvents(date) ? 'has-events' : '';
        }}
        tileContent={({ date }) => {
          // Opcional: agregar indicador visual para fechas con eventos
          return hasEvents(date) ? <div className="event-indicator">•</div> : null;
        }}
      />
      
      {selectedDate && (
        <div className="selected-date-info">
          <p>Fecha seleccionada: {selectedDate}</p>
          <button 
            onClick={() => onDateChange(null)}
            className="clear-date-btn"
          >
            Limpiar selección
          </button>
        </div>
      )}
    </section>
  );
}

export default CalendarView;