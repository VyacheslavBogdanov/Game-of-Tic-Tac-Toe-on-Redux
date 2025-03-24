import { FieldLayout } from "./fieldLayout";
import styles from "./field.module.css";
import PropTypes from "prop-types";

export const Field = ({ handleClick }) => {
  return (
    <div className={styles.field}>
      <FieldLayout handleClick={handleClick} />
    </div>
  );
};

Field.propTypes = {
  handleClick: PropTypes.func,
};
