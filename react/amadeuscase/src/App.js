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
    departurePrice: 0,
    returnPrice: 0,
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
    departurePrice: 0,
    returnPrice: 0,
  });
  const value = {flightInfo, setFlightInfo};
  const[renderFlightResults, setRenderFlightResults] = useState(false);
  const switchLabel = isSwitchChecked ? "One Way" : "Two Way";
  const isClickable = renderFlightResults ? { pointerEvents: 'none'} : null

  const handleFlightResults = () => {
    switch(isSwitchChecked) {
      case true: // means "one way"
        if(flightInfo.departureAirport === "" || flightInfo.arrivalAirport === "" || flightInfo.departureDate === "") {
          alert("Be sure all areas are filled")
        } else {
          setRenderFlightResults(true)
        };
        break
      case false: // means"two way"
        if(
          flightInfo.departureAirport === "" 
          || flightInfo.arrivalAirport === "" 
          || flightInfo.departureDate === ""
          || flightInfo.returnDate === ""
        ) {
          alert("Be sure all areas are filled")
        } else {
          setRenderFlightResults(true)
        };
        break
    };
  };

  return (
    <div className="App">
      <FlightContext.Provider value={value}>
        <Container>

          <Row>
          <h2 id='welcomeTitle'>Welcome to Flight Searcher App!</h2><br/>
          </Row>

          <Row style={isClickable}>
            <Col md={5} >
              <Airports type={"departureAirport"} />
            </Col>
            <Col md={5} >
              <Airports type={"arrivalAirport"} />
            </Col>
          </Row>

          <Row>
            <Col md={3} style={isClickable}>
              <DatePicker type={"departureDate"} />
            </Col>
            <Col md={3} style={isClickable}>
              {isSwitchChecked === false && <DatePicker type={"returnDate"} />}
            </Col>
            <Col md={2} style={isClickable}>
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
                onClick={ handleFlightResults }
                style={isClickable}
              > Search </Button>
              <Button
                variant="outline-secondary"
                className='buttons'
                onClick={() => window.location.reload()}
              > Reset </Button>
            </Col>
          </Row>

          <Row>
            <Col md={10}>
              { renderFlightResults && <FlightResults type={isSwitchChecked ? "oneWay" : "twoWay"} /> }
            </Col>
          </Row>

        </Container>
      </FlightContext.Provider>
    </div>
  );
}

export default App;