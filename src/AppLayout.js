import { Field } from "./components/field/field";
import { Info } from "./components/information/info";
import styles from "./AppLayout.module.css";
import PropTypes from "prop-types";

export const AppLayout = ({
  isGameEnded,
  currentPlayer,
  handleClick,
  startOver,
  restartButton,
}) => {
  return (
    <div className={styles.App}>
      <Info isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
      <Field handleClick={handleClick} />
      <button className={styles.start} onClick={startOver}>
        <img src={restartButton} alt="RESTART" />
      </button>
    </div>
  );
};

AppLayout.propTypes = {
  // field: PropTypes.array,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
  handleClick: PropTypes.func,
  startOver: PropTypes.func,
  restartButton: PropTypes.any,
};
