import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import QuizImg from "../img/quiz.svg";
import "./Welcome.css";

const Welcome = () => {
  //'quizState' pega os valores e 'dispatch' altera os valores.
  //('dispatch' é como eu vou entar no reducer e executar o 'switch')
  const [quizState, dispatch] = useContext(QuizContext); //4ª

  //4ª
  return (
    <div id="welcome">
      <h2>Seja bem vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={QuizImg} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
