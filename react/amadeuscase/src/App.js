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
          <br/>
          <h2>Welcome to Flight Searcher App!</h2>
          <br/>
          <br/>
        </Row>
        <Row>
          <Col md={4}>
            <Airports />
          </Col>
          <Col md={4} >
            <Airports />
          </Col>
          <Col md={2}>
            <DatePicker />
          </Col>
          <Col md={2}>
            <DatePicker />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;