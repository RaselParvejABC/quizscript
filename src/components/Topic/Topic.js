import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <Card style={{ margin: "0" }}>
      <Card.Img
        variant="top"
        src={logo}
        style={{ backgroundColor: "#000000", maxWidth: "100%" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Our {name} Quiz Contains {total} questions.
        </Card.Text>
        <LinkContainer to={`test/${id}`}>
          <Button variant="primary" className="d-block">
            Take the Test
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default Topic;
