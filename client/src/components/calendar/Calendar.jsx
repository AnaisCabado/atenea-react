import { useState } from "react";
import Calendar from "react-calendar";
import './Calendar.css';

function CalendarView({ events, onDateChange, selectedDate }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);

    const selectedDateStr = selectedDate.toLocaleDateString('en-CA');
    onDateChange(selectedDateStr);
  };

  return (
    <section className="calendar-view">
      <Calendar
        onChange={handleDateChange}
        value={date}
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