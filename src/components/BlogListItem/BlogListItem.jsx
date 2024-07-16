import React, { useEffect } from "react";
import Link from "next/link";

import styles from "./BlogListItem.module.scss";

const BlogListItem = ({ category, posts, showArticles }) => {
  return (
    <article className={`${styles.article} ${showArticles ? styles.revealed : ""}`}>
      <h2>{category}</h2>
      {posts.map((post, index) => (
        <Link className={styles.article_link} key={index} href={`/posts/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </article>
  );
};

export default BlogListItem;
