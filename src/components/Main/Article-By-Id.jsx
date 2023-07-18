import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../utils/Api-Util";

function ArticleById(params) {
  const { articleid } = useParams();
  const [individualArticle, setIndividualArticle] = useState([]);

  useEffect(() => {
    getArticleById(articleid).then((article) => {
      setIndividualArticle(article);
    });
  }, []);

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
          <p>Votes: {votes}</p>
          <p>comments: {comment_count}</p>
        </section>
      </div>
    </div>
  );
}

export default ArticleById;
