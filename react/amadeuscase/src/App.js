import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Airports from './components/Airport.js';

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
          <Col xs={1} md={1} />
          <Col xs={5} md={5}>
            <Airports />
          </Col>
          <Col xs={5} md={5}>
            <Airports />
          </Col>
          <Col xs={1} md={1} />
        </Row>
      </Container>
    </div>
  );
}

export default App;