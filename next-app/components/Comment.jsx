import React, { useState } from "react";

export const Comment = ({ comment, isChild }) => {
  const [showChildComments, setShowChildComments] = useState(true);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "gray",
        }}
      >
        <div>
          {comment.author}
          <span style={{ color: "orange", marginLeft: 4 }}>
            {comment.score}
          </span>
        </div>

        {!isChild && (
          <div
            onClick={() => setShowChildComments((prevState) => !prevState)}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {showChildComments ? "Hide" : "Show"}
          </div>
        )}
      </div>

      <div>{comment.body}</div>

      {showChildComments && comment.replies?.data?.children && (
        <div style={{ marginLeft: 10, borderLeft: "1px solid gray" }}>
          {comment.replies?.data?.children?.map((childComment) => (
            <Comment
              key={childComment.id}
              comment={childComment.data}
              isChild={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};
