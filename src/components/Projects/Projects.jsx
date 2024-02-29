import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import styles from "../../styles/globals.module.scss";
import styles from "./Projects.module.scss";

const Projects = ({ index, title, setModal }) => {
  // const [modal, setModal] = useState({ active: false, index: 0 });
  // const [projects, setProjects] = useState([]);

  // const fetchProjects = async () => {
  //   try {
  //     const { data } = await axios.get("/data/new-projects.json");
  //     setProjects(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  return (
    // <main className={styles.projects}>

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

{
  /* {projects.map((project) => (
        <div key={project.id} className={styles.project}>
          <article className={styles.article}>
            <div className={styles.text_container}>
              {" "}
              <h3 className={styles.text_title}>{project.title}</h3>
              <p className={styles.text}>{project.description}</p>
              <div className={styles.tech_stack}>
                {project.techStack.map((tech, index) => (
                  <div key={index} className={styles.tech}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <Link className={styles.link} href="/projects/triangulate">
              <div className={styles.image_container}>
                <img
                  src={project.imageSrc}
                  className={styles.image}
                  alt={`image of ${project.title}`}
                />
              </div>
            </Link>
          </article>
        </div>
      ))} */
}
// </main>

export default Projects;
