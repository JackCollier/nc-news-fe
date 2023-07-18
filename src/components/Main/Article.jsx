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
                className="hover-item"
                onClick={() => {
                  navigate(`/articles/${article.article_id}`);
                }}
              >
                {article.title}
              </h2>
              <p>{article.author}</p>
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
              <div className="vote-section">
                <i class="fa fa-arrow-up hover-item" aria-hidden="true"></i>
                <p>Votes: {article.votes}</p>
                <i class="fa fa-arrow-down hover-item" aria-hidden="true"></i>
              </div>
              <p>Comments: {article.comment_count}</p>
            </section>
          </div>
        );
      })}
    </>
  );
}

export default Article;
