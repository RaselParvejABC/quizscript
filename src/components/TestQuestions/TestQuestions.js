import React, { useContext } from "react";
import Stack from "react-bootstrap/Stack";
import TestQuestion from "../TestQuestion/TestQuestion";
import { QuestionsContext } from "../../contexts/QuestionsContextProvider/QuestionsContextProvider";

const TestQuestions = () => {
  const questions = useContext(QuestionsContext);

  return (
    <div>
      <Stack gap={3}>
        {questions.map((question) => (
          <TestQuestion key={question["id"]} question={question} />
        ))}
      </Stack>
    </div>
  );
};

export default TestQuestions;
