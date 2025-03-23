import { InfoLayout } from "./infoLayout";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { store } from "../../store";

export const Info = ({ isGameEnded, currentPlayer }) => {
  const [isDraw, setIsDraw] = useState(store.getState().isDraw);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsDraw(store.getState().isDraw);
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

Info.propTypes = {
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};
