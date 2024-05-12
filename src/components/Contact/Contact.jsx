import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";
import Button from "../Button/Button";
import chris from "../../assets/images/chris-smart2.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Contact = () => {
  const image = useRef();
  const text = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(text.current, { y: 100, opacity: 0 });
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(image.current, {
        scrollTrigger: {
          trigger: image.current,
          scrub: false,
          start: "top center+=20",
          end: "center bottom",
          once: true,
        },

        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "power1.inOut",
        duration: 2,
      });
      gsap.to(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: false,
          start: "top bottom",
          end: "bottom bottom",
          once: true,
          markers: true,
        },

        ease: "pwer4.inOut",
        opacity: 1,
        y: 0,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.contact}>
      <section className={styles.contact_section}>
        <div ref={text} className={styles.text_container}>
          <p>
            Want to work <span>together</span> on <span>your</span> project?
          </p>
          <div className={styles.contact_email}>
            <a
              className={styles.contact_button}
              href="mailto:chris.dcoutts@gmail.com">
              <Button
                style={{ fontSize: "0.5rem" }}
                className={styles.button}
                label={`chris.dcoutts@gmail.com \u2198`}
              />
            </a>
          </div>
        </div>
        <div ref={image} className={styles.image_container}>
          <Image
            className={styles.image}
            src={chris}
            alt="profile picture of me"
            fill={true}
          />
        </div>
      </section>
    </section>
  );
};

export default Contact;
