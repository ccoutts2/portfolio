import styles from "./BurgerMenu.module.scss";
import React from "react";
import { motion } from "framer-motion";

const BurgerMenu = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.button}>
      <motion.div
        onClick={() => {
          setIsActive(!isActive);
        }}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={styles.slider}>
        <div className={styles.el}>
          <PerspectiveText label="menu" />
        </div>
        <div className={styles.el}>
          <PerspectiveText label="close" />
        </div>
      </motion.div>
    </div>
  );
};

export default BurgerMenu;

const PerspectiveText = ({ label }) => {
  return (
    <div className={styles.perspective_text}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
