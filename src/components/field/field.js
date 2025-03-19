import { FieldLayout } from "./fieldLayout";
import styles from "./field.module.css";
import PropTypes from "prop-types";

export const Field = ({
  // field,
  handleClick,
}) => {
  return (
    <div className={styles.field}>
      <FieldLayout
        //   field={field}
        handleClick={handleClick}
      />
    </div>
  );
};

Field.propTypes = {
  //   field: PropTypes.array,
  handleClick: PropTypes.func,
};
