import React from "react";

const Post = ({ post }) => {
  // Ensure that post is defined and has the expected properties
  if (!post || !post.title || !post.body) {
    return null; // Return null if post is not defined or doesn't have title/body
  }

  return (
    <li style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </li>
  );
};



export default Post;