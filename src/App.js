import { AppLayout } from "./AppLayout";
import { useState, useEffect } from "react";
import { store } from "./store";

import restartButton from "./img/restart.png";

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = (field, currentPlayer) => {
  return WIN_PATTERNS.some((pattern) =>
    pattern.every((index) => field[index] === currentPlayer)
  );
};

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);

  const { field } = store.getState();

  const handleClick = (index) => {
    if (isGameEnded) {
      return;
    } else if (field[index] === "") {
      const newField = field.slice();
      newField[index] = currentPlayer;

      store.dispatch({ type: "SET_FIELD", payload: newField });
      if (checkWinner(newField, currentPlayer)) {
        setIsGameEnded(true);
        return;
      } else if (newField.every((el) => el !== "")) {
        store.dispatch({ type: "SET_IS_DRAW", payload: true });
      }
      setCurrentPlayer((prevState) => (prevState === "X" ? "0" : "X"));
    }
  };

  const startOver = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);

    store.dispatch({ type: "SET_IS_DRAW", payload: false });
    store.dispatch({ type: "SET_FIELD", payload: Array(9).fill("") });
  };

  return (
    <>
      <AppLayout
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
        handleClick={handleClick}
        startOver={startOver}
        restartButton={restartButton}
      />
    </>
  );
}
