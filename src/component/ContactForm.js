import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState(0);
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNum },
    });
  };

  return (
    <Form className="input-form" onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Control
          type="number"
          placeholder="전화번호"
          onChange={(e) => setPhoneNum(e.target.value)}
          required
        />
      </Form.Group>

      <Button className="put-button" variant="primary" type="submit">
        등록
      </Button>
    </Form>
  );
};

export default ContactForm;
