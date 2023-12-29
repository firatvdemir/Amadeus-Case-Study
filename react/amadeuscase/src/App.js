import Airports from './components/Airport.js';
import DatePicker from './components/DatePicker.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState } from 'react';

import './App.css';

export const FlightContext = React.createContext({
  flightInfo: {
    departureAirport: "",
    returnAirport: "",
    flightDate: "",
    flightPrice: 0,
  },
  setFlightInfo: () => {}
})

function App() {
  const[flightInfo, setFlightInfo] = useState({
    departureAirport: "",
    returnAirport: "",
    departureDate: "",
    returnDate: "",
    flightPrice: 0,
  });

  const value = {flightInfo, setFlightInfo};

  return (
    <div className="App">
      <FlightContext.Provider value={value}>
        <Container>
          <Row>
          <h2>Welcome to Flight Searcher App!</h2><br/>
          </Row>
          <Row>
            <Col md={4} >
              <Airports type={"departureAirport"} />
            </Col>
            <Col md={4} >
              <Airports type={"returnAirport"} />
            </Col>
            <Col>
              <DatePicker type={"departureDate"} />
            </Col>
            <Col>
              <DatePicker type={"returnDate"} />
            </Col>
            <Col >
              <button>Hello</button>
            </Col>
          </Row>

        </Container>
      </FlightContext.Provider>
    </div>
  );
}

export default App;