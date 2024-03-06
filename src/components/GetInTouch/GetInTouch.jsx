import styles from "./GetInTouch.module.scss";
import React, { useState, useRef } from "react";
import chris from "../../assets/images/chris-pic2.svg";
import Image from "next/Image";
import Button from "../Button/Button";
import axios from "axios";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
  const [activeLabel, setActiveLabel] = useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    services: "",
    textarea: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();

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

  const isMessageValid = () => {
    if (!formFields.textarea.length) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (
      !isNameValid() ||
      !isEmailValid() ||
      !isServicesValid() ||
      !isMessageValid()
    ) {
      return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setFormSubmitted(true);
            window.location.reload();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newMessage = {
  //     name: formFields.name,
  //     email: formFields.email,
  //     services: formFields.services,
  //     textarea: formFields.textarea,
  //   };

  //   if (isFormValid()) {
  //     await axios.post("/api/submitForm", newMessage);
  //     setFormSubmitted(true);
  //     formRef.current.reset();
  //   }

  //   setFormFields({
  //     name: "",
  //     email: "",
  //     services: "",
  //     textarea: "",
  //   });

  //   console.log("Form submitted!");
  // };

  const handleInputFocus = (labelFor) => {
    setActiveLabel(labelFor);
  };

  const handleInputBlur = () => {
    setActiveLabel(null);
  };

  // const noName = () => {
  //   if (formSubmitted && !formFields.name.length) {
  //     return <p>Please enter a name</p>;
  //   }
  //   return null;
  // };

  // const noEmail = () => {
  //   if (formSubmitted && !formFields.email.length) {
  //     return <p>Please enter an email</p>;
  //   }
  //   return null;
  // };

  return (
    <main className={styles.container}>
      <section className={styles.top_section}>
        <Image
          className={styles.image}
          src={chris}
          alt="profile picture of me"
          width={100}
          height={120}
        />
        <div className={styles.heading_container}>
          <h1 className={styles.heading}>Contact me</h1>
          <h2 className={styles.heading}>Let's work together</h2>
        </div>
      </section>
      <div>
        <h3 className={styles.contact_heading}>contact details</h3>
        <a className={styles.email} href="mailto:chris.dcoutts@gmail.com">
          <Button
            className={styles.button}
            label={`chris.dcoutts@gmail.com \u2198`}
          />
        </a>
      </div>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
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
            type="text"
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
            type="email"
            id="email"
            name="email"
            placeholder="joe.smith@email.com*"
            onFocus={() => handleInputFocus("email")}
            onBlur={handleInputBlur}></input>
          {/* <p>{noEmail()}</p> */}
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
            type="text"
            id="services"
            name="services"
            placeholder="CV/Work/Want to get to know me?"
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
            type="text"
            id="textarea"
            name="textarea"
            className={styles.input}
            placeholder="Hey, Chris ..."
            onFocus={() => handleInputFocus("textarea")}
            onBlur={handleInputBlur}></textarea>
        </div>
        <div className={styles.button_container}>
          <Button
            className={`${styles.button} ${
              formSubmitted ? styles.button_confirm : ""
            }`}
            label={formSubmitted ? "Sent" : "Send"}
          />
        </div>
      </form>
    </main>
  );
};

export default GetInTouch;
