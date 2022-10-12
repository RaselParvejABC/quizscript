import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QuestionsContextProvider from "../../contexts/QuestionsContextProvider/QuestionsContextProvider";
import UserSelectionContextProvider from "../../contexts/UserSelectionContextProvider/UserSelectionContextProvider";
import TestQuestions from "../TestQuestions/TestQuestions";
import TestLiveScore from "../TestLiveScore/TestLiveScore";

export async function loader({ params }) {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${params.topicID}`
  );
  const responseBody = await response.json();
  return { test: responseBody["data"] };
}

const Test = () => {
  const test = useLoaderData()["test"];
  const questions = test["questions"];
  const [userSelection, setUserSelection] = useState({});
  const onNewSelection = (questionID, selectedIndex) => {
    setUserSelection({ ...userSelection, questionID: selectedIndex });
  };

  return (
    <QuestionsContextProvider value={questions}>
      <UserSelectionContextProvider value={[userSelection, onNewSelection]}>
        <Container>
          <Row>
            <Col md={9} lg={10}>
              <h2 className="text-primary text-center">{`${test["name"]} Test`}</h2>
              <TestQuestions />
            </Col>
            <Col md={3} lg={2}>
              <TestLiveScore />
            </Col>
          </Row>
        </Container>
      </UserSelectionContextProvider>
    </QuestionsContextProvider>
  );
};

export default Test;
