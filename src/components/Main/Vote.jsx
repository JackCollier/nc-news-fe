import { useEffect, useState } from "react";
import { patchArticleVotes } from "../utils/Api-Util";

function Vote({ article }) {
  const [articleVote, setArticleVote] = useState(article.votes);

  const articleVoteFunc = (id, vote) => {
    setArticleVote((prevNum) => prevNum + vote);
    patchArticleVotes(id, vote)
      .then((res) => {
        return;
      })
      .catch((err) => {
        setArticleVote((prevNum) => prevNum - vote);
      });
  };

  return (
    <div className="vote-section">
      <i
        className="fa fa-arrow-up hover-item"
        aria-hidden="true"
        onClick={() => articleVoteFunc(article.article_id, 1)}
      ></i>
      <p>Votes: {articleVote}</p>
      <i
        className="fa fa-arrow-down hover-item"
        aria-hidden="true"
        onClick={() => articleVoteFunc(article.article_id, -1)}
      ></i>
    </div>
  );
}

export default Vote;
