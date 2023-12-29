import { useEffect, useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import flights from '../data/flights.json';
import { FlightContext } from "../App";

function DatePicker({ type }) {
  const[selectedDate, setSelectedDate] = useState('');
  const {flightInfo, setFlightInfo} = useContext(FlightContext);

  const label = (type === "departureDate") ? "Departure Date" : "Return Date";
  useEffect(() => {
    const results = flights.filter((flight) => flight.departure_date.includes(selectedDate) ? true : false);
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setFlightInfo({
      ...flightInfo,
      [type]: e.target.value
    })
    
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label> {label} </Form.Label>
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