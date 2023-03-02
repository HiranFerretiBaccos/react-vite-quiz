import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { QuizProvider } from "./context/quiz";
//3ª Provendo o contexto (Criado anteriormente com createContext()) aqui pra toda a aplicação.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);

//Obs: </React.StrictMode> duplica o console.log()... Depois que faz o build não acontece mais.
