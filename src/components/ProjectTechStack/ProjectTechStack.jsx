import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./ProjectTechStack.module.scss";

const ProjectTechStack = ({ projectIndex }) => {
  const [techStack, setTechStack] = useState(null);

  const fetchTechStack = async () => {
    try {
      const { data } = await axios.get("/data/projects.json");
      setTechStack(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTechStack();
  }, []);

  if (!techStack) return null;

  return (
    <section className={styles.about}>
      <h4>Tech Stack</h4>
      <article className={styles.card}>
        {techStack[projectIndex].techStack.map((tech, index) => (
          <div key={index} className={styles.tech_item}>
            {tech}
          </div>
        ))}
      </article>
    </section>
  );
};

export default ProjectTechStack;
