import { Field } from "./components/field/field";
import { Info } from "./components/information/info";
import styles from "./AppLayout.module.css";
import PropTypes from "prop-types";

export const AppLayout = ({ handleClick, startOver, restartButton }) => {
  return (
    <div className={styles.App}>
      <Info />
      <Field handleClick={handleClick} />
      <button className={styles.start} onClick={startOver}>
        <img src={restartButton} alt="RESTART" />
      </button>
    </div>
  );
};

AppLayout.propTypes = {
  handleClick: PropTypes.func,
  startOver: PropTypes.func,
  restartButton: PropTypes.any,
};
