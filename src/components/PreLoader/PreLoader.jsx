import React, { useState, useEffect } from "react";
import styles from "./PreLoader.module.scss";
import { motion } from "framer-motion";
import { slideUp, opacity } from "./Anim";

const PreLoader = () => {
  const [index, setIndex] = useState(0);

  const words = ["Hello", "I've", "Been", "Waiting", "For", "You"];

  useEffect(() => {
    if (index === words.length - 1) return;

    const timeoutId = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 2500 : 165
    );

    return () => clearTimeout(timeoutId);
  }, [index, words.length]);

  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        exit="exit"
        className={styles.intro}>
        <motion.p
          variants={opacity}
          initial="initial"
          animate="enter"
          className={styles.words}>
          {words[index]}
        </motion.p>
      </motion.div>
    </>
  );
};

export default PreLoader;
