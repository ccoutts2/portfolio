import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/globals.module.scss";
import Button from "../Button/Button";

const About = () => {
  const router = useRouter();

  const onClick = () => {
    router.push("/about");
  };

  return (
    <main className={styles.about}>
      <div>
        {/* <h2 className={styles.title}>About</h2> */}
        <p className={styles.text}>
          I am software engineer based in London. I enjoy combining my love for
          problem solving and logic, with creative flare.
        </p>
      </div>
      <div className={styles.button_container}>
        <Button
          className={styles.button}
          label={`Learn more about me \u2198`}
          onClick={onClick}
        />
      </div>
    </main>
  );
};

export default About;
