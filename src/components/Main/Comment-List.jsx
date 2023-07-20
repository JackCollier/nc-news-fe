function CommentList({ articleComments }) {
  return articleComments.map(
    ({ author, body, created_at, votes, article_id, comment_id }) => {
      return (
        <div className="comment">
          <section className="article-header">
            <h3>{author}</h3>
            <p>{created_at}</p>
          </section>
          <p className="comment-body">{body}</p>
          <p className="comment-vote">Votes: {votes}</p>
        </div>
      );
    }
  );
}

export default CommentList;
