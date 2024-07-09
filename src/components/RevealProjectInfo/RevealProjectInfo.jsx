import React, { useState } from "react";
import Button from "../Button/Button";
import { motion } from "framer-motion";

import styles from "./RevealProjectInfo.module.scss";

const RevealProjectInfo = ({ paragraphs }) => {
  const [showText, setShowText] = useState(false);

  const onClick = () => {
    setShowText(!showText);
  };

  const textContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delayChildren: 0.2,
    },
  };

  return (
    <section className={styles.process}>
      <div className={styles.process_button}>
        <Button
          label={
            showText ? `Hide the Process \u2198` : `Show the Process  \u2198`
          }
          onClick={onClick}
        />
      </div>

      {showText ? (
        <motion.div variants={textContainer} initial="hidden" animate="visible">
          {paragraphs.map((paragraph, index) => {
            return (
              <motion.p
                key={index}
                variants={item}
                className={styles.process_text}
              >
                {paragraph}
              </motion.p>
            );
          })}
        </motion.div>
      ) : null}
    </section>
  );
};

export default RevealProjectInfo;
