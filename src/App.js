import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="title">연락처</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ContactForm />
        </Col>
        <Col md={6}>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
