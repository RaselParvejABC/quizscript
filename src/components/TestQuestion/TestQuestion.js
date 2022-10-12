import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { UserSelectionContext } from "../../contexts/UserSelectionContextProvider/UserSelectionContextProvider";
import Form from "react-bootstrap/Form";

const TestQuestion = ({ question }) => {
  const [userSelection, onNewSelection] = useContext(UserSelectionContext);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const options = question["options"];
  const correctAnswer = question["correctAnswer"];
  const userSelectedAnswer = userSelection[question["id"]];
  const isAttempted = userSelectedAnswer ? true : false;
  return (
    <Card>
      <Card.Header className="text-end">
        {showCorrectAnswer && (
          <span>
            The Correct Answer is:{" "}
            <span className="text-info">{correctAnswer}</span> &nbsp;{" "}
            <EyeSlashFill onClick={() => setShowCorrectAnswer(false)} />
          </span>
        )}
        {showCorrectAnswer || (
          <EyeFill onClick={() => setShowCorrectAnswer(true)} />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div dangerouslySetInnerHTML={{ __html: question["question"] }}></div>
        </Card.Title>
        {options.map((option, index) => (
          <Form.Check
            className="mt-3"
            key={index}
            label={option}
            name={`${question["id"]}-option`}
            type="radio"
            id={`${question["id"]}-option-${index}`}
            onClick={() => onNewSelection(question["id"], option)}
          />
        ))}
      </Card.Body>
      <Card.Footer>
        {isAttempted && (
          <span>
            You have selected{" "}
            <span className="text-info">{userSelectedAnswer}</span>.{" "}
            {userSelectedAnswer === correctAnswer ? (
              <span className="text-success text-center fw-bold">Correct!</span>
            ) : (
              <span className="text-danger text-center fw-bold">
                Incorrect.
              </span>
            )}
          </span>
        )}
      </Card.Footer>
    </Card>
  );
};

export default TestQuestion;
