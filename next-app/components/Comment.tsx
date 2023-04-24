import React from "react";

export const Comment = ({ comment }) => {
  if (!comment.body) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: 12,
        display: "flex",
        gap: 12,
        flexDirection: "column",
        borderRadius: 10,
      }}
    >
      <div style={{ color: "gray" }}>
        {comment.author}
        <span style={{ color: "orange", marginLeft: 4 }}>{comment.score}</span>
      </div>

      <div>{comment.body}</div>

      {comment.replies?.data?.children && (
        <div style={{ marginLeft: 10, borderLeft: "1px solid gray" }}>
          {comment.replies?.data?.children?.map((childComment) => (
            <Comment key={childComment.id} comment={childComment.data} />
          ))}
        </div>
      )}
    </div>
  );
};
