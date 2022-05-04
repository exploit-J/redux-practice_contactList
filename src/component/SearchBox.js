import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div>
      <Row>
        <Col lg={9} md={9}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="이름" />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={3} md={3}>
          <Button variant="primary" type="submit">
            검색
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
