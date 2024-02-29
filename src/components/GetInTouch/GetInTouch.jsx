import styles from "./GetInTouch.module.scss";
import React, { useState } from "react";

const GetInTouch = () => {
  const [activeLabel, setActiveLabel] = useState(null);

  const handleInputFocus = (labelFor) => {
    setActiveLabel(labelFor);
  };

  const handleInputBlur = () => {
    setActiveLabel(null);
  };

  return (
    <div className={styles.container}>
      <h1>Contact me</h1>
      <h2>Let's work together</h2>
      <div className={styles.form_col}>
        <h3>contact details</h3>
        <a href="mailto:chris.dcoutts@gmail.com">
          <p>chris.dcoutts@gmail.com</p>
        </a>
      </div>
      <form className={styles.form}>
        <div className={styles.form_col}>
          <div>
            <h4 className={styles.number}>01</h4>
            <label
              htmlFor="name"
              className={`${styles.label} ${
                activeLabel === "name" ? styles.activeLabel : ""
              }`}>
              What's your name?
            </label>
          </div>
          <input
            className={styles.input}
            id="name"
            name="name"
            placeholder="Joe Smith*"
            onFocus={() => handleInputFocus("name")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div>
            <h4 className={styles.number}>02</h4>
            <label
              className={`${styles.label} ${
                activeLabel === "email" ? styles.activeLabel : ""
              }`}
              htmlFor="email">
              What's your email?
            </label>
          </div>
          <input
            className={styles.input}
            id="email"
            name="email"
            placeholder="joe@smith.com*"
            onFocus={() => handleInputFocus("email")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div>
            <h4 className={styles.number}>03</h4>
            <label
              className={`${styles.label} ${
                activeLabel === "services" ? styles.activeLabel : ""
              }`}
              htmlFor="services">
              What do you want to get in touch about?
            </label>
          </div>
          <input
            className={styles.input}
            id="services"
            name="services"
            placeholder="Perm/Contract/Want to get to know me?"
            onFocus={() => handleInputFocus("services")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div>
            <h4 className={styles.number}>04</h4>
            <label
              className={`${styles.label} ${
                activeLabel === "textarea" ? styles.activeLabel : ""
              }`}
              htmlFor="textarea">
              Send me a personal message!
            </label>
          </div>
          <textarea
            id="textarea"
            name="textarea"
            className={styles.input}
            placeholder="Hey Chris ..."
            onFocus={() => handleInputFocus("textarea")}
            onBlur={handleInputBlur}></textarea>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
