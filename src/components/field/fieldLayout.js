import styles from "./fieldLayout.module.css";
import PropTypes from "prop-types";
import { store } from "../../store";
import { useState, useEffect } from "react";

export const FieldLayout = ({ handleClick }) => {
  const [field, setField] = useState(store.getState().field);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setField(store.getState().field);
    });
    return () => {
      unsubscribe();
    };
  }, []);
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
  shandleClick: PropTypes.func,
};
