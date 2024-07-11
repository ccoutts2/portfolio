import globalStyles from "../../styles/globals.module.scss";
import navBarStyles from "../../components/NavBar/NavBar.module.scss";
import styles from "./index.module.scss";
import React, { useEffect } from "react";
import Head from "next/head";
import Inner from "@/components/Inner/Inner";
import NavBar from "@/components/NavBar/NavBar";
import ProjectPageHeading from "@/components/ProjectPageHeading/ProjectPageHeading";
import Footer from "@/components/Footer/Footer";
import Lenis from "@studio-freight/lenis";
import RevealProjectInfo from "@/components/RevealProjectInfo/RevealProjectInfo";
import ProjectTechStack from "@/components/ProjectTechStack/ProjectTechStack";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const paragraphs = [
    "We began by creating our own API using Node.js and Express.js. This API housed all the questions, answer options, and correct answers for our quiz within a JSON file. Before diving into frontend development, we tested our API endpoint with Postman to ensure functionality",
    "Once our API was up and running, we turned our attention to building the game using React.js. Our main goal was to develop an enjoyable and engaging game where players had to answer all the questions correctly. We built functions to verify if the player selected answer matched the correct one from our API which also kept track of the scores",
    "Whenever a player clicked on a correct answer, we rendered a new question and updated their score accordingly. If the player clicked on an incorrect answer at any point, we rendered UI to let the player know they sadly lost the game",
    "Throughout the game, we maintained a simple and user-friendly interface. Upon successfully answering all the questions and achieving a score of 8, we celebrated their victory with a winning message displayed on the screen",
  ];

  return (
    <main className={`${globalStyles.globals} ${navBarStyles}`}>
      <Head>
        <title>Chris | Full Stack Developer</title>
      </Head>
      <Inner>
        <NavBar />
        <ProjectPageHeading
          title="gollum's cave"
          year="2024"
          role="Design & Development"
          gitHubLink="https://github.com/ccoutts2/lotr-riddle-game-client"
          liveWebsite={false}
          summary="Enter Gollum's cave and answer all the riddles to leave with the
                ring. 24 Hour Pair Programming Hackathon"
        />
        <div className={styles.spacer}></div>

        <div className={styles.video_container}>
          <video controls={false} autoPlay loop muted className={styles.video}>
            <source src="/videos/gollum.mp4" type="video/mp4" />
          </video>
        </div>

        <div className={styles.spacer}></div>
        <ProjectTechStack projectIndex={3} />
        <RevealProjectInfo paragraphs={paragraphs} />
        <Footer />
      </Inner>
    </main>
  );
}
