import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label, onClick }) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        {label}
      </button>
    </div>
  );
};

export default Button;
