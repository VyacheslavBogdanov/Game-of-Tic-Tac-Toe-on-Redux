import { AppLayout } from "./AppLayout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectField,
  selectIsGameEnded,
} from "./selectors";
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
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const field = useSelector(selectField);

  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (isGameEnded) {
      return;
    } else if (field[index] === "") {
      const newField = field.slice();
      newField[index] = currentPlayer;

      dispatch({ type: "SET_FIELD", payload: newField });
      if (checkWinner(newField, currentPlayer)) {
        dispatch({ type: "SET_GAME_ENDED", payload: true });
        return;
      } else if (newField.every((el) => el !== "")) {
        dispatch({ type: "SET_IS_DRAW", payload: true });
      }

      currentPlayer === "X"
        ? dispatch({
            type: "SET_CURRENT_PLAYER",
            payload: "O",
          })
        : dispatch({
            type: "SET_CURRENT_PLAYER",
            payload: "X",
          });
    }
  };

  const startOver = () => {
    dispatch({
      type: "SET_CURRENT_PLAYER",
      payload: "X",
    });
    dispatch({ type: "SET_GAME_ENDED", payload: false });
    dispatch({ type: "SET_IS_DRAW", payload: false });
    dispatch({ type: "SET_FIELD", payload: Array(9).fill("") });
  };

  return (
    <>
      <AppLayout
        handleClick={handleClick}
        startOver={startOver}
        restartButton={restartButton}
      />
    </>
  );
}
