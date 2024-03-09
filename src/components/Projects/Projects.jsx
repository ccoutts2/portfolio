import React from "react";
import styles from "./Projects.module.scss";
import Link from "next/link";

const Projects = ({ index, title, description, setModal }) => {
  return (
    <Link className={styles.link} href={`/projects/${title}`}>
      <div
        className={styles.project_container}
        onMouseEnter={() => {
          setModal({ active: true, index: index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index: index });
        }}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
      </div>
    </Link>
  );
};

export default Projects;
