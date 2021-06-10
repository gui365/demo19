import React, { useEffect, useState } from "react";
import API from "../api/API";
import Container from "../components/Container/Container";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.getBlogPosts().then(data => setPosts(data));
  }, []);

  return (
    <main>
      <h2>Blog</h2>
      <Container posts={posts} />
    </main>
  );
}

export default Blog;
