import { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import { FlightContext } from "../App";

function DatePicker({ type }) {
  const[selectedDate, setSelectedDate] = useState('');
  const {flightInfo, setFlightInfo} = useContext(FlightContext);

  const label = (type === "departureDate") ? "Departure Date" : "Return Date";

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
          <Form.Label style={{float: "left", marginTop: "10%"}}> {label} </Form.Label>
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