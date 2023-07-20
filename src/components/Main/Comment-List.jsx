import { useContext } from "react";
import { UserContext } from "../../contexts/User";

function CommentList({ articleComments }) {
  const { user, setUser } = useContext(UserContext);

  return articleComments.map(
    ({ author, body, created_at, votes, article_id, comment_id }) => {
      return (
        <div className="comment" key={comment_id}>
          <section className="article-header">
            <h3>{author}</h3>
            <p>{created_at}</p>
          </section>
          <p className="comment-body">{body}</p>
          <p className="comment-vote">Votes: {votes}</p>
          {user.username === author ? <button>Delete Comment</button> : null}
        </div>
      );
    }
  );
}

export default CommentList;
