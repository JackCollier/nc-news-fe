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
      <article className="article">
        <header className="in-article-header">
          <h3>{topic}</h3>
          <h4>Written by: {author}</h4>
        </header>
        <h1 className="article-title">{title}</h1>
        <img src={article_img_url} alt="Article Thumbnail" />
        <section aria-label="Article Body">
          <p>{body}</p>
        </section>
        <section className="vote-comment-section">
          <Vote article={individualArticle} />
          <p>Comments: {comment_count}</p>
        </section>
        <div className="post-comment-section">
          <PostComment articleid={articleid} />
        </div>
        <div className="comment-section">
          <CommentList articleComments={articleComments} />
        </div>
      </article>
    </div>
  );
}

export default ArticleById;
