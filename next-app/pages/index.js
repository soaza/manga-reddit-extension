import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://www.reddit.com/search.json?q=title: One Piece Chapter 906"
      );
      setPosts(res.data.data.children.map((obj) => obj.data));
    };

    fetchPosts();
  }, []);

  return (
    <div
      style={{ display: "flex", gap: 10, flexDirection: "column", padding: 20 }}
    >
      <h2 style={{ textAlign: "center", fontSize: 30 }}>
        Manga Reddit discussion
      </h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default IndexPage;
