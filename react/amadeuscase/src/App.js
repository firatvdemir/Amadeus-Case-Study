import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={1} md={2} ><h2>küçükte görünmez</h2></Col>
          <Col xs={10} md={8}><h1>hep görünür</h1></Col>
          <Col xs={1} md={2}><h2>küçükte görünmez</h2></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
