import { useState, useContext } from "react";
import { postComment } from "../utils/Api-Util";
import { UserContext } from "../../contexts/User";

function PostComment({ articleid }) {
  const { user, setUser } = useContext(UserContext);
  const [comment, setComment] = useState();
  const [commentSuccess, setCommentSuccess] = useState(null);
  const [buttonLock, setButtonLock] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLock(true);
    if (comment === undefined || !comment.length) {
      setCommentSuccess("empty");
      setButtonLock(false);
    } else {
      postComment(articleid, comment, user.username)
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
      <label htmlFor="comment-body">Add your comment:</label>
      <textarea
        name="body"
        id="comment-body"
        cols="80"
        rows="10"
        onChange={(event) => {
          setComment(event.target.value);
        }}
        value={comment}
        placeholder="..."
        required
        aria-describedby="comment-validation-msg"
      ></textarea>
      <button className="post-button" disabled={buttonLock}>
        Post Comment
      </button>
    </form>
  );
}

export default PostComment;
