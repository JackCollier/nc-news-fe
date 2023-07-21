import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById, getCommentsByID } from "../utils/Api-Util";
import Loading from "../Loading";
import Vote from "./Vote";
import PostComment from "./Post-Comment";
import CommentList from "./Comment-List";
import Error from "../Error";

function ArticleById(params) {
  const { articleid } = useParams();
  const [individualArticle, setIndividualArticle] = useState({});
  const [articleComments, setArticleComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(articleid)
      .then((article) => {
        setIndividualArticle(article);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(response.statusText);
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

  if (error) {
    return <Error message={error} />;
  }

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
          <CommentList articleComments={articleComments} />
        </div>
      </div>
    </div>
  );
}

export default ArticleById;
