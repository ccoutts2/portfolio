import Link from "next/link";
import React from "react";
import styles from "../../styles/globals.module.scss";
import triangulate from "../../assets/images/triangulate-1.png";
import Image from "next/image";

const Projects = () => {
  return (
    <main className={styles.projects}>
      <h2>Projects</h2>
      <div>
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
    </main>
  );
};

export default Projects;
