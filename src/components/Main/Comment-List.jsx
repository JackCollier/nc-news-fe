import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { deleteComment } from "../utils/Api-Util";

function CommentList({ articleComments }) {
  const { user, setUser } = useContext(UserContext);
  const [buttonLock, setButtonLock] = useState(false);
  const [deleteFail, setDeleteFail] = useState(false);

  const handleDelete = (id) => {
    setButtonLock(true);
    deleteComment(id)
      .then((res) => {
        setButtonLock(false);
      })
      .catch((err) => {
        setButtonLock(false);
        setDeleteFail(true);
      });
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
              <button
                onClick={() => handleDelete(comment_id)}
                disabled={buttonLock}
              >
                Delete Comment
              </button>
            ) : null}
            {deleteFail ? <p>Deletion failed, please try again</p> : null}
          </div>
        </div>
      );
    }
  );
}

export default CommentList;
