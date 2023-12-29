import { useState } from "react";
import Form from 'react-bootstrap/Form';
import flights from '../data/flights.json';

function DatePicker() {
  const[selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    console.log(flights);
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
            placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </>
  );

};

export default DatePicker;