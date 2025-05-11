import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
// import './Calendar.css';


function CalendarView({ events, onDateChange }) {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);

        const selectedDateStr = selectedDate.toLocaleDateString('en-CA');

        if (onDateChange && typeof onDateChange === 'function') {
            onDateChange(selectedDateStr);
        }
    };

    return (
        <div>
            <h2>Select a date:</h2>
            <Calendar onChange={handleDateChange} value={date} />
        </div>
    );
}

export default CalendarView;
