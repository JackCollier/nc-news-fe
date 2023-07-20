import { useState } from "react";
import { postComment } from "../utils/Api-Util";

function PostComment({ articleid }) {
  const [comment, setComment] = useState();
  const [commentSuccess, setCommentSuccess] = useState(null);
  const [buttonLock, setButtonLock] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLock(true);
    if (!comment.length) {
      setCommentSuccess("empty");
    } else {
      postComment(articleid, comment)
        .then((res) => {
          setCommentSuccess("posted");
          setComment("");
          setButtonLock(false);
        })
        .catch((err) => {
          setCommentSuccess("error");
          setButtonLock(false);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {commentSuccess === "posted" ? (
        <p>Comment succesfully posted</p>
      ) : commentSuccess === "error" ? (
        <p>Post failed</p>
      ) : commentSuccess === "empty" ? (
        <p>Cannot submit empty post</p>
      ) : null}
      <textarea
        name="body"
        id="body"
        cols="80"
        rows="10"
        onChange={(event) => {
          setComment(event.target.value);
        }}
        value={comment}
        placeholder="Add your comment here..."
      ></textarea>
      <button className="post-button" disabled={buttonLock}>
        Post Comment
      </button>
    </form>
  );
}

export default PostComment;
