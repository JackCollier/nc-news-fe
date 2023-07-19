import { useState } from "react";

function PostComment({ setComment }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="body"
        id="body"
        cols="80"
        rows="10"
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      <button>Post Comment</button>
    </form>
  );
}

export default PostComment;
