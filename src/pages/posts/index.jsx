import React, { useState, useRef, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/dist/Flip";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import BlogListItem from "@/components/BlogListItem/BlogListItem";

import { getCategorisedPosts } from "../../../lib/posts";
import globalStyles from "../../styles/globals.module.scss";
import styles from "./Index.module.scss";
import Lenis from "@studio-freight/lenis";
import Inner from "@/components/Inner/Inner";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

export default function Posts({ allPostsData }) {
  const container = useRef(null);
  const articleContanier = useRef(null);
  const textRef = useRef(null);
  const [showArticles, setShowArticles] = useState(false);

  const text = "Enjoy a curated selection of blog posts made by yours truly";

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(
    () => {
      gsap.set(textRef.current, { yPercent: "20", autoAlpha: 0 });
    },
    { scope: container }
  );

  const revealArticles = () => {
    const initialState = Flip.getState(articleContanier.current.children);

    setShowArticles(!showArticles);

    requestAnimationFrame(() => {
      Flip.from(initialState, {
        duration: 2,
        ease: "power4.inOut",
        nested: true,
        absolute: true,
        stagger: 0.1,
      });
    });

    gsap.set(textRef.current, { yPercent: "20", autoAlpha: 0 });

    if (!showArticles) {
      gsap.to(textRef.current, {
        delay: 0.8,
        autoAlpha: 1,
        duration: 1,
        yPercent: 0,
        ease: "power4.inOut",
        stagger: 0.5,
      });
    }
  };
  return (
    <Inner>
      <section className={globalStyles.globals}>
        <NavBar />
        <section className={styles.page_content}>
          <header className={styles.header}>
            <h1>Blog Posts</h1>
          </header>
          <div className={styles.button_container} onClick={revealArticles}>
            <Button label="Reveal All Blog Posts" />
          </div>
          <section
            ref={articleContanier}
            className={`${styles.articles} ${
              showArticles ? styles.reorder : styles.articles
            }`}>
            {allPostsData !== null &&
              Object.keys(allPostsData).map((post) => (
                <BlogListItem
                  category={post}
                  posts={allPostsData[post]}
                  key={post}
                  showArticles={showArticles}
                />
              ))}
          </section>
          <section ref={container} className={styles.text_section}>
            <p ref={textRef}>{text}</p>
          </section>
        </section>
        <Footer />
      </section>
    </Inner>
  );
}

export async function getStaticProps() {
  const allPostsData = await getCategorisedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
