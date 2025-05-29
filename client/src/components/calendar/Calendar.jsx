import { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css';

function CalendarView({ events, onDateChange, selectedDate }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    // Formatear fecha como YYYY-MM-DD para consistencia
    const selectedDateStr = selectedDate.toLocaleDateString('en-CA');

    if (onDateChange && typeof onDateChange === 'function') {
      onDateChange(selectedDateStr);
    }
  };

  return (
    <section className="calendar-view">
      <Calendar
        onChange={handleDateChange}
        value={date}
        // tileClassName={({ date }) => {
        //   // Agregar clase CSS para fechas con eventos
        //   return hasEvents(date) ? 'has-events' : '';
        // }}
        // tileContent={({ date }) => {
        //   // Opcional: agregar indicador visual para fechas con eventos
        //   return hasEvents(date) ? <div className="event-indicator">•</div> : null;
        // }}
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