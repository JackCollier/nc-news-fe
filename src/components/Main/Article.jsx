import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { patchArticleVotes } from "../utils/Api-Util";
import Vote from "./Vote";

function Article({ articles }) {
  const [articleVote, setArticleVote] = useState();

  const articleVoteFunc = (id, vote) => {
    patchArticleVotes(id, vote).then((res) => {
      console.log(res);
    });
  };

  const navigate = useNavigate();
  return (
    <>
      {articles.map((article) => {
        return (
          <div className="article" key={article.article_id}>
            <section className="article-header">
              <h2
                className="hover-item"
                onClick={() => {
                  navigate(`/articles/${article.article_id}`);
                }}
              >
                {article.title}
              </h2>
              <p>u\{article.author}</p>
            </section>
            <img
              onClick={() => {
                navigate(`/articles/${article.article_id}`);
              }}
              src={article.article_img_url}
              alt={article.title}
              className="hover-item"
            />
            <section className="vote-comment-section">
              <Vote article={article} />
              <p>Comments: {article.comment_count}</p>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default Article;
