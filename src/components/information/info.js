import { InfoLayout } from "./infoLayout";
import { useState, useEffect } from "react";
import { store } from "../../store";

export const Info = () => {
  const [isDraw, setIsDraw] = useState(store.getState().isDraw);
  const [isGameEnded, setIsGameEnded] = useState(store.getState().isGameEnded);
  const [currentPlayer, setCurrentPlayer] = useState(
    store.getState().currentPlayer
  );
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsDraw(store.getState().isDraw);
      setIsGameEnded(store.getState().isGameEnded);
      setCurrentPlayer(store.getState().currentPlayer);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const displayInfo = () => {
    if (isDraw === true) {
      return "Ничья";
    } else if (isDraw === false && isGameEnded === true) {
      return `Победил ${currentPlayer}`;
    } else if (isDraw === false && isGameEnded === false) {
      return `Ходит ${currentPlayer}`;
    }
  };

  return (
    <div>
      <InfoLayout displayInfo={displayInfo} />
    </div>
  );
};
