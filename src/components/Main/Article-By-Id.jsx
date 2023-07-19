import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsByID } from "../utils/Api-Util";
import Loading from "../Loading";
import Vote from "./Vote";
import PostComment from "./Post-Comment";

function ArticleById(params) {
  const { articleid } = useParams();
  const [individualArticle, setIndividualArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(articleid).then((article) => {
      setIndividualArticle(article);
      setIsLoading(false);
    });
    getCommentsByID(articleid).then((comments) => {
      setArticleComments(comments);
    });
  }, [articleComments]);

  const {
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_img_url,
    comment_count,
  } = individualArticle;

  if (isLoading) return <Loading />;

  return (
    <div className="main-container">
      <div className="article">
        <section className="article-header">
          <h3>{topic}</h3>
          <h4>{author}</h4>
        </section>
        <h2>{title}</h2>
        <img src={article_img_url} alt="" />
        <p>{body}</p>
        <section className="vote-comment-section">
          <Vote article={individualArticle} />
          <p>comments: {comment_count}</p>
        </section>
        <div className="post-comment-section">
          <PostComment articleid={articleid} />
        </div>
        <div className="comment-section">
          {articleComments.map(({ author, body, created_at, votes }) => {
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
          })}
        </div>
      </div>
    </div>
  );
}

export default ArticleById;
