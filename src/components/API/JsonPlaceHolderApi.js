export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data; // This will be an array of posts
  } catch (error) {
    console.error("Fetch error:", error);
    return []; // Return an empty array in case of error
  }
};