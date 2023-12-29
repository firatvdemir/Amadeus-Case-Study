import Airports from './components/Airport.js';
import DatePicker from './components/DatePicker.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
        <h2>Welcome to Flight Searcher App!</h2><br/>
        </Row>
        <Row>
          <Col md={4} >
            <Airports type={"departureAirport"} />
          </Col>
          <Col md={4} >
            <Airports />
          </Col>
          <Col>
            <DatePicker />
          </Col>
          <Col>
            <DatePicker />
          </Col>
          <Col >
            <button>Hello</button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;