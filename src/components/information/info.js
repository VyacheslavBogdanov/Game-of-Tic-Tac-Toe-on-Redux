import { InfoLayout } from "./infoLayout";
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

export const Info = () => {
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isDraw = useSelector(selectIsDraw);
  const isGameEnded = useSelector(selectIsGameEnded);

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
