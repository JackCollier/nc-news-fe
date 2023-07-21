import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { deleteComment } from "../utils/Api-Util";

function CommentList({ articleComments }) {
  const { user, setUser } = useContext(UserContext);
  const [buttonLock, setButtonLock] = useState(false);
  const [deleteFailId, setDeleteFailId] = useState(null);

  const handleDelete = (id) => {
    setButtonLock(true);
    deleteComment(id)
      .then((res) => {
        setButtonLock(false);
      })
      .catch((err) => {
        setButtonLock(false);
        setDeleteFailId(id);
      });
  };

  return articleComments.map(
    ({ author, body, created_at, votes, article_id, comment_id }) => {
      const deletionFailed = deleteFailId === comment_id;
      return (
        <div className="comment" key={comment_id}>
          <section className="article-header">
            <h3>{author}</h3>
            <p>{created_at.slice(0, 10)}</p>
          </section>
          <p className="comment-body">{body}</p>
          <div className="article-header">
            <p className="comment-vote">Votes: {votes}</p>
            {user.username === author ? (
              <>
                <button
                  onClick={() => handleDelete(comment_id)}
                  disabled={buttonLock}
                >
                  Delete Comment
                </button>
                {deletionFailed ? (
                  <p>Deletion failed, please try again</p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      );
    }
  );
}

export default CommentList;
