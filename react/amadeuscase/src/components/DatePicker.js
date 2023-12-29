import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import flights from '../data/flights.json';

function DatePicker() {
  const[selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const results = flights.filter((flight) => flight.departure_date.includes(selectedDate) ? true : false);
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Departure Date</Form.Label>
          <Form.Control 
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Form.Group>
      </Form>
    </>
  );

};

export default DatePicker;