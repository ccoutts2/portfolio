import React from "react";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./ProjectPageHeading.module.scss"

const ProjectPageHeading = ( { title, year, role, gitHubLink, websiteLink, summary, liveWebsite, videoLink, videoDemo }) => {
    return (
    <section className={styles.content}>
    <h1 className={styles.heading}>/ {title}</h1>
    <section className={styles.info_container}>
      <div className={styles.info}>
        <h3 className={styles.header}>year</h3>
        <p>{year}</p>
      </div>
      <div className={styles.info}>
        <h3 className={styles.header}>role</h3>
        <p>{role}</p>
      </div>
      <div className={styles.button_container}>
        <Link
          className={styles.link}
          href={gitHubLink}
          target="_blank">
          <Button label={`GitHub \u2198`} />
        </Link>
        {liveWebsite && <Link
          className={styles.link}
          href={websiteLink}
          target="_blank">
          <Button label={`Live Website \u2198`} />
        </Link>}
        {videoDemo && <Link
          className={styles.link}
          href={videoLink}
          target="_blank">
          <Button label={`Video Demo \u2198`} />
        </Link>}
        
      </div>
    </section>
    <div className={styles.summary}>
              <p>
                {summary}
              </p>
            </div>
    </section>
   
    )
}

export default ProjectPageHeading;