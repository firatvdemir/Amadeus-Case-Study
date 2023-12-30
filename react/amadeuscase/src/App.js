import Airports from './components/Airport.js';
import DatePicker from './components/DatePicker.js';
import FlightResults from './components/FlightResults.js';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import React, { useState } from 'react';

import './App.css';

export const FlightContext = React.createContext({
  flightInfo: {
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    flightPrice: 0,
  },
  setFlightInfo: () => {}
})

function App() {
  const[isSwitchChecked, setIsSwitchChecked] = useState(false);
  const[flightInfo, setFlightInfo] = useState({
    departureAirport: "",
    arrivalAirport: "",
    departureDate: "",
    returnDate: "",
    flightPrice: 0,
  });
  const value = {flightInfo, setFlightInfo};
  const switchLabel = isSwitchChecked ? "One Way" : "Two Way"

  return (
    <div className="App">
      <FlightContext.Provider value={value}>
        <Container>

          <Row>
          <h2>Welcome to Flight Searcher App!</h2><br/>
          </Row>

          <Row>
            <Col md={5} >
              <Airports type={"departureAirport"} />
            </Col>
            <Col md={5} >
              <Airports type={"arrivalAirport"} />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <DatePicker type={"departureDate"} />
            </Col>
            <Col md={3}>
              {isSwitchChecked === false && <DatePicker type={"returnDate"} />}
            </Col>
            <Col md={2}>
              <Form id='switcher'>
                <Form.Label> {switchLabel} </Form.Label>
                <Form.Check
                  size='lg'
                  type="switch"
                  id="custom-switch"
                  onChange={(e) => setIsSwitchChecked(e.target.checked)}
                />
              </Form>
            </Col>
            <Col >
              <Button
                variant="outline-primary"
                type="submit"
                className='buttons'
              > Search </Button>
              <Button
                variant="outline-secondary"
                type="submit"
                className='buttons'
              > Reset </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <FlightResults />
            </Col>
          </Row>

        </Container>
      </FlightContext.Provider>
    </div>
  );
}

export default App;