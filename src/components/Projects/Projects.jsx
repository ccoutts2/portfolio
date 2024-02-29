import React from "react";
import styles from "./Projects.module.scss";

const Projects = ({ index, title, setModal }) => {
  return (
    <div
      className={styles.project_container}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>Design & Development</p>
    </div>
  );
};

export default Projects;
