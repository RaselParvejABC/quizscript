import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Banner from "../Banner/Banner";

export async function loader() {
  const response = await fetch("https://openapi.programming-hero.com/api/quiz");
  const responseBody = await response.json();
  return { topics: responseBody["data"] };
}

const Topics = () => {
  const { topics } = useLoaderData();
  return (
    <Container>
      <Banner />
      <Row className="g-4 align-items-stretch">
        {topics.map((topic) => (
          <Col md={6} lg={4} key={topic.id}>
            <Topic topic={topic} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Topics;
