import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/User";
import { deleteComment } from "../utils/Api-Util";

function CommentList({ articleComments }) {
  const { user, setUser } = useContext(UserContext);

  const handleDelete = (id) => {
    console.log(id);
    deleteComment(id)
      .then((res) => {})
      .catch((err) => {});
  };

  return articleComments.map(
    ({ author, body, created_at, votes, article_id, comment_id }) => {
      return (
        <div className="comment" key={comment_id}>
          <section className="article-header">
            <h3>{author}</h3>
            <p>{created_at}</p>
          </section>
          <p className="comment-body">{body}</p>
          <div className="article-header">
            <p className="comment-vote">Votes: {votes}</p>
            {user.username === author ? (
              <button onClick={() => handleDelete(comment_id)}>
                Delete Comment
              </button>
            ) : null}
          </div>
        </div>
      );
    }
  );
}

export default CommentList;
