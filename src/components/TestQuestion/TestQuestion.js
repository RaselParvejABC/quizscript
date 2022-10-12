import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { UserSelectionContext } from "../../contexts/UserSelectionContextProvider/UserSelectionContextProvider";

const TestQuestion = ({ question }) => {
  const [userSelection, onNewSelection] = useContext(UserSelectionContext);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  return (
    <Card>
      <Card.Header className="text-end">
        {showCorrectAnswer && (
          <div>
            The Correct Answer is: {question["correctAnswer"]} &nbsp;{" "}
            <EyeSlashFill onClick={() => setShowCorrectAnswer(false)} />
          </div>
        )}
        {showCorrectAnswer || (
          <EyeFill onClick={() => setShowCorrectAnswer(true)} />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <div dangerouslySetInnerHTML={{ __html: question["question"] }}></div>
        </Card.Title>
        <Card.Text>Options</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TestQuestion;
