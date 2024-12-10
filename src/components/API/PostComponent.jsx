import React, { useEffect, useState } from "react";
import { fetchPosts } from "./JsonPlaceHolderApi"; // Import the fetch function
import Post from "./Post"; // Import the Post component

const Posts = () => {
  const [posts, setPosts] = useState([]); // State to hold the posts
  const [loading, setLoading] = useState(false); // State to manage loading state

  const loadPosts = async () => {
    setLoading(true);
    const fetchedPosts = await fetchPosts();
    console.log(fetchedPosts); // Log the fetched posts
    setPosts(fetchedPosts);
    setLoading(false);
  };

  useEffect(() => {
    console.log("useEffect triggered"); // Log when useEffect runs
    loadPosts(); // Fetch posts on the first render
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} /> // Render each post using the Post component
        ))}
      </ul>
    </div>
  );
};

export default Posts;