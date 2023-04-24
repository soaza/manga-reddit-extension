import axios from "axios";
import React, { useEffect, useState } from "react";
import { Comment } from "./Comment";

export const Discussion = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchDiscussion = async () => {
      const discussionRes = await axios
        .get(`https://www.reddit.com/comments/${postId}/.json?sort=top&t=all`)
        .catch((err) => {
          console.log(err);
          throw Error("Axios Error");
        });
      setComments(
        discussionRes.data[1].data.children.map((child) => child.data)
      );
    };

    fetchDiscussion();
  }, [postId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {comments
        .sort((a, b) => (a.score > b.score ? -1 : 1))
        .map((comment) => (
          <Comment key={comment.id} comment={comment} isChild={false} />
        ))}
    </div>
  );
};
