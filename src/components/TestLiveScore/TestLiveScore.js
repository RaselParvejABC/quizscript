import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { QuestionsContext } from "../../contexts/QuestionsContextProvider/QuestionsContextProvider";
import { UserSelectionContext } from "../../contexts/UserSelectionContextProvider/UserSelectionContextProvider";

const TestLiveScore = () => {
  const questions = useContext(QuestionsContext);
  const [userSelection] = useContext(UserSelectionContext);
  const total = questions.length;
  const attemptedQuestionIDs = Object.keys(userSelection);
  const attempted = attemptedQuestionIDs.length;
  let correctOnes = 0;
  attemptedQuestionIDs.forEach((attemptedQuestionID) => {
    const question = questions.find(
      (question) => question["id"] === attemptedQuestionID
    );
    const correctAnswer = question["correctAnswer"];
    if (userSelection[attemptedQuestionID] === correctAnswer) {
      correctOnes++;
    }
  });
  const incorrectOnes = attempted - correctOnes;
  return (
    <Card className="mt-5 position-sticky">
      <Card.Body>
        <p>
          <span className="fw-bold text-primary">Total</span>: {total}
        </p>
        <p>
          <span className="fw-bold text-primary">Attempted</span>: {attempted}
        </p>
        <p>
          <span className="fw-bold text-success">Correct</span>: {correctOnes}
        </p>
        <p>
          <span className="fw-bold text-danger">Incorrect</span>:{" "}
          {incorrectOnes}
        </p>
      </Card.Body>
    </Card>
  );
};

export default TestLiveScore;