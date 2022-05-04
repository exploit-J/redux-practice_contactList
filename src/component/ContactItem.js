import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div>
      <Row>
        <Col className="contact-img" lg={2} md={2} sm={2}>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
        </Col>
        <Col className="contact-info" lg={10} md={10} sm={10}>
          <div>{item.name}</div>
          <div>
            {item.phoneNum.replace(
              /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,
              "$1-$2-$3"
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
