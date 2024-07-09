import React, { useRef } from "react";
import styles from "./Projects.module.scss";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = ({ index, title, description, setModal }) => {
  const container = useRef();

  useGSAP(() => {
   
      gsap.to(container.current, {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 1.5,
      });
    
  }, { scope: container });

  return (
    <Link ref={container} className={styles.link} href={`/projects/${title}`}>
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
