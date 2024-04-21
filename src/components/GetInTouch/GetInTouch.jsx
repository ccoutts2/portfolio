import styles from "./GetInTouch.module.scss";
import React, { useLayoutEffect, useState, useRef } from "react";
import chris from "../../assets/images/chris-pic2.svg";
import Image from "next/image";
import Button from "../Button/Button";
import emailjs from "@emailjs/browser";
import gsap from "gsap";

const GetInTouch = () => {
  const [activeLabel, setActiveLabel] = useState(null);
  const [isError, setIsError] = useState(false);
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
    return isNameValid() && isEmailValid() && isServicesValid() && isMessageValid();
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
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } else {
      setIsError(true);
    }
  };

  const handleInputFocus = (labelFor) => {
    setActiveLabel(labelFor);
  };

  const handleInputBlur = () => {
    setActiveLabel(null);
  };

  const image = useRef();
  const text = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(image.current, {
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power4.inOut",
        duration: 1.5,
        delay: 1,
      });
      gsap.from(text.current, {
        opacity: 0,
        x: "-200px",
        ease: "power3.Out",
        delay: 2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.container}>
      <section ref={image} className={styles.top_section}>
        <Image
          className={styles.image}
          src={chris}
          alt="profile picture of me"
          width={100}
          height={120}
        />
        <div className={styles.heading_container}>
          <h1 className={styles.title}>Contact me</h1>

          <a className={styles.email} href="mailto:chris.dcoutts@gmail.com">
            <Button
              className={styles.button}
              label={`chris.dcoutts@gmail.com \u2198`}
            />
          </a>
        </div>
      </section>

      <h2 ref={text} className={styles.heading}>
        Let&apos;s work together
      </h2>

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.form_col}>
          <div className={styles.label_header}>
            <h4 className={styles.number}>01</h4>
            <label
              htmlFor="name"
              className={`${styles.label} ${
                activeLabel === "name" ? styles.activeLabel : ""
              }`}>
              What&apos;s your name?
            </label>
          </div>
          <input
            onChange={onChange}
            className={`${styles.input} ${
              isError && !formFields.name.length ? styles.error_outline : ""
            }`}
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
              What&apos;s your email?
            </label>
          </div>
          <input
            onChange={onChange}
            className={`${styles.input} ${
              isError && !formFields.email.length ? styles.error_outline : ""
            }`}
            type="email"
            id="email"
            name="email"
            placeholder="joe.smith@email.com*"
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
            className={`${styles.input} ${
              isError && !formFields.services.length ? styles.error_outline : ""
            }`}
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
            className={`${styles.input} ${
              isError && !formFields.textarea.length ? styles.error_outline : ""
            }`}
            placeholder="Hey, Chris ..."
            onFocus={() => handleInputFocus("textarea")}
            onBlur={handleInputBlur}></textarea>
        </div>
        {isError && <ErrorMessage />}
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

export const ErrorMessage = () => {
  return <p className={styles.error}>**Please fill in all the fields**</p>;
};
