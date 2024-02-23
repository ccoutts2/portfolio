import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/globals.module.scss";
import triangulate from "../../assets/images/triangulate-4.svg";
import deliveroo from "../../assets/images/deliveroo-1.svg";
import gollum from "../../assets/images/gollum-1.svg";
import Image from "next/image";

const Projects = () => {
  // const [projects, setProjects] = useState([]);

  // const fetchProjects = async () => {
  //   try {
  //     const { data } = await axios.get("/data/projects.json");
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
    <main className={styles.projects}>
      <h2 className={styles.title}>/ projects</h2>

      {/* {projects.map((project) => (
        <div key={project.id} className={styles.projects}>
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
                <Image
                  src={project.imageSrc}
                  className={styles.image}
                  alt={`image of ${project.title}`}
                  width={200}
                  height={400}
                />
              </div>
            </Link>
          </article>
        </div>
      ))} */}
      <div className={styles.project}>
        <article className={styles.article}>
          <div className={styles.text_container}>
            {" "}
            <h3 className={styles.text_title}>Triangulate</h3>
            <p className={styles.text}>
              Step into the map with your friends and discover pubs in your city
            </p>
            <p className={styles.text}>Triangulate makes planning fun</p>
            <div className={styles.tech_stack}>
              <div className={styles.tech}>React</div>
              <div className={styles.tech}>Node</div>
              <div className={styles.tech}>Express</div>
              <div className={styles.tech}>Knex</div>
              <div className={styles.tech}>MySQL</div>
              <div className={styles.tech}>MapBox</div>
            </div>
          </div>
          <Link className={styles.link} href="/projects/triangulate">
            <div className={styles.image_container}>
              <Image
                src={triangulate}
                className={styles.image}
                alt="image of phone screen showing home screen of Triangulate"
              />
            </div>
          </Link>
        </article>
      </div>
      <div className={styles.project}>
        <article className={styles.article}>
          <div className={styles.text_container}>
            {" "}
            <h3 className={styles.text_title}>Deliveroo</h3>
            <p className={styles.text}>
              How might we enhance the experience of sending and receiving a gift for
              any occassion?
            </p>
            <p className={styles.text}>24 Hour Hackathon with UX Designers</p>
            <div className={styles.tech_stack}>
              <div className={styles.tech}>React</div>
              <div className={styles.tech}>Scss</div>
            </div>
          </div>
          <Link className={styles.link} href="/projects/triangulate">
            <div className={styles.image_container}>
              <Image
                src={deliveroo}
                className={styles.image}
                alt="image of phone screen showing home screen of Triangulate"
              />
            </div>
          </Link>
        </article>
      </div>
      <div className={styles.project}>
        <article className={styles.article}>
          <div className={styles.text_container}>
            {" "}
            <h3 className={styles.text_title}>Deliveroo</h3>
            <p className={styles.text}>
              How might we enhance the experience of sending and receiving a gift for
              any occassion?
            </p>
            <p className={styles.text}>24 Hour Hackathon with UX Designers</p>
            <div className={styles.tech_stack}>
              <div className={styles.tech}>React</div>
              <div className={styles.tech}>Scss</div>
            </div>
          </div>
          <Link className={styles.link} href="/projects/triangulate">
            <div className={styles.image_container}>
              <Image
                src={gollum}
                className={styles.image}
                alt="image of phone screen showing home screen of Triangulate"
              />
            </div>
          </Link>
        </article>
      </div>
    </main>
  );
};

export default Projects;
