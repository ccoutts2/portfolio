import styles from "./GetInTouch.module.scss";
import React, { useState } from "react";
// import chris from "../../assets/images/chris-profile.svg";
// import Image from "next/Image";
import Button from "../Button/Button";
import axios from "axios";

const GetInTouch = () => {
  const [activeLabel, setActiveLabel] = useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    services: "",
    textarea: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const isNameValid = () => {
    if (!formFields.name.length) {
      return false;
    }

    return true;
  };

  const isEmailValid = () => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (!formFields.email.length || !validateEmail(formFields.email)) {
      return false;
    }
    return true;
  };

  const isServicesValid = () => {
    if (!formFields.services.length) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (!isNameValid() || !isEmailValid() || !isServicesValid()) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      name: formFields.name,
      email: formFields.email,
      services: formFields.services,
      textarea: formFields.textarea,
    };

    if (isFormValid()) {
      await axios.post("/api/submitForm", newMessage);
      setFormSubmitted(true);
    }

    console.log("Form submitted!");
  };

  const handleInputFocus = (labelFor) => {
    setActiveLabel(labelFor);
  };

  const handleInputBlur = () => {
    setActiveLabel(null);
  };
  return (
    <div className={styles.container}>
      {/* <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={chris}
          alt="profile picture of me"
          width={200}
          height={200}
        />
      </div> */}
      <h1 className={styles.heading}>Contact me</h1>
      <h2 className={styles.heading}>Let's work together</h2>
      <div>
        <h3 className={styles.contact_heading}>contact details</h3>
        <a className={styles.email} href="mailto:chris.dcoutts@gmail.com">
          <Button
            className={styles.button}
            label={`chris.dcoutts@gmail.com \u2198`}
          />
        </a>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_col}>
          <div className={styles.label_header}>
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
            onChange={onChange}
            className={styles.input}
            id="name"
            name="name"
            placeholder="Joe Smith*"
            onFocus={() => handleInputFocus("name")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div className={styles.label_header}>
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
            onChange={onChange}
            className={styles.input}
            id="email"
            name="email"
            placeholder="joe@smith.com*"
            onFocus={() => handleInputFocus("email")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div className={styles.label_header}>
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
            onChange={onChange}
            className={styles.input}
            id="services"
            name="services"
            placeholder="Perm/Contract/Want to get to know me?"
            onFocus={() => handleInputFocus("services")}
            onBlur={handleInputBlur}></input>
        </div>
        <div className={styles.form_col}>
          <div className={styles.label_header}>
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
            onChange={onChange}
            id="textarea"
            name="textarea"
            className={styles.input}
            placeholder="Hey, Chris ..."
            onFocus={() => handleInputFocus("textarea")}
            onBlur={handleInputBlur}></textarea>
        </div>
        <Button className={styles.button} label={"Send"} />
      </form>
    </div>
  );
};

export default GetInTouch;
