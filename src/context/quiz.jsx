import { createContext, useReducer } from "react";
//'useReducer' pra gerenciar estados mais complexos e fazer alterações com base em ações no projeto.
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

//Estado inicial do 'useReducer' 1ª
const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

//Possibilidade de alterar o Estado inicial. 2ª
//Executa uma função baseado em 2 parâmetros: 'state' (Estado inicial) e 'action' (Ação que o usuário faz).
//Switch deixa mais organizados que If elses infinitos...
//Switch será baseado no tipo da ação (action.type) e cases que poderão alterar o valor do estado inicial.
const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5; //Algoritmo de ordenação de Arrays.
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };

    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;

      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    default:
      return state;
  }
};

//'QuizContext' é onde eu consumo o contexto.
//Depois importar o 'useContext' pra usar o 'QuizContext' (Em todos os componentes que for utilizar).
export const QuizContext = createContext(); //1ª

//'children' para abraçar vários componentes.
//'QuizProvider' importa no 'main.jsx' (É o que provê o contexto).
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState); //3ª
  //quizReducer pra saber qual em qual estado está e initialState para padronizar valores iniciais.

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>; //2ª
};
