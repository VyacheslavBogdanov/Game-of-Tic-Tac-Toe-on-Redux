import styles from "./fieldLayout.module.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectField } from "../../selectors";

export const FieldLayout = ({ handleClick }) => {
  const field = useSelector(selectField);

  return (
    <div className={styles.fieldLayout}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => handleClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

FieldLayout.propTypes = {
  handleClick: PropTypes.func,
};
