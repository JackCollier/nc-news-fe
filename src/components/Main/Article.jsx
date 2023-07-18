import { useNavigate } from "react-router-dom";

function Article({ articles }) {
  const navigate = useNavigate();
  return (
    <>
      {articles.map((article) => {
        return (
          <div className="article" key={article.article_id}>
            <section className="article-header">
              <h2
                onClick={() => {
                  navigate(`/articles/:${article.article_id}`);
                }}
              >
                {article.title}
              </h2>
              <p>{article.author}</p>
            </section>
            <img src={article.article_img_url} alt="" />
            <section className="vote-comment-section">
              <p>Votes: {article.votes}</p>
              <p>Comments: {article.comment_count}</p>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default Article;
