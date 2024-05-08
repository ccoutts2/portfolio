import { useRouter } from "next/router";
import React from "react";
import styles from "./About.module.scss";
import Button from "../Button/Button";

const About = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/about");
  };

  return (
    <section className={styles.about}>
      <div className={styles.text_container}>
        <p className={styles.text}>
          I am a software engineer based in London. I enjoy combining my love for
          <span className={styles.italic}>problem solving</span> and{" "}
          <span className={styles.italic}>logic</span>, with{" "}
          <span className={styles.italic}>creative flare.</span>
        </p>
      </div>
      <div className={styles.button_container}>
        <Button
          className={styles.button}
          label={`Learn more about me \u2198`}
          onClick={onClick}
        />
      </div>
    </section>
  );
};

export default About;
