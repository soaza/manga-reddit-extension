import React, { useState } from "react";
import { Discussion } from "./Discussion";

export const Post = ({ post }) => {
  const [showDiscussion, setShowDiscussion] = useState(false);

  return (
    <div
      onClick={() => {
        setShowDiscussion(true);
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        backgroundColor: "#5E96AC",
        color: "whitesmoke",
        borderRadius: 10,
        width: "100%",
        padding: 16,
      }}
    >
      <div
        style={{ fontSize: 16, fontWeight: "bold", cursor: "pointer" }}
        className="hoverable"
      >
        {post.title}
      </div>
      <div>{post.score} votes</div>
      <div>{post.url}</div>

      {showDiscussion && <Discussion postId={post.id} />}
    </div>
  );
};
