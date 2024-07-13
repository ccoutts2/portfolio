import React from "react";
import BlogListItem from "@/components/BlogListItem/BlogListItem";
import { getCategorisedPosts } from "../../../lib/posts";
import styles from "../../styles/globals.module.scss";

export async function getStaticProps() {
  const allPostsData = await getCategorisedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <section className={styles.globals}>
      <header>
        <h1>Blog Posts</h1>
      </header>
      <section>
        {allPostsData !== null &&
          Object.keys(allPostsData).map((post) => (
            <BlogListItem category={post} posts={allPostsData[post]} key={post} />
          ))}
      </section>
    </section>
  );
}
