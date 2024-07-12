import React from "react";
import Link from "next/link";

const BlogListItem = ({ category, posts }) => {
  return (
    <section>
      <div>
        <h2>{category}</h2>
        {posts.map((post, index) => (
          <Link key={index} href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogListItem;
