import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { keyword } });
  };
  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={9} md={9}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="이름으로 검색"
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col lg={3} md={3}>
            <Button className="search-button" variant="primary" type="submit">
              검색
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
