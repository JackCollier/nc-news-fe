import { useState } from "react";
import { postComment } from "../utils/Api-Util";

function PostComment({ articleid }) {
  const [comment, setComment] = useState({});
  const [commentSuccess, setCommentSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleid, comment)
      .then((res) => {
        setCommentSuccess("posted");
      })
      .catch((err) => {
        setCommentSuccess("error");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {commentSuccess === "posted" ? (
        <p>Comment succesfully posted</p>
      ) : commentSuccess === "error" ? (
        <p>Post failed</p>
      ) : null}
      <textarea
        name="body"
        id="body"
        cols="80"
        rows="10"
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      <button className="post-button">Post Comment</button>
    </form>
  );
}

export default PostComment;
