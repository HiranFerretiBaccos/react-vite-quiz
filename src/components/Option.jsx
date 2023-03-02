import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

//1ª etapa das props
const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext); //4ª

  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""
      } ${quizState.answerSelected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
