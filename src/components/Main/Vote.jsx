import { useEffect, useState } from "react";
import { patchArticleVotes } from "../utils/Api-Util";

function Vote({ article }) {
  const [articleVote, setArticleVote] = useState(article.votes);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClick = () => {
    setIsButtonClicked(true);
  };

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
      <button
        className="fa fa-arrow-up hover-item"
        aria-hidden="true"
        onClick={() => {
          handleClick();
          articleVoteFunc(article.article_id, 1);
        }}
        disabled={isButtonClicked}
      ></button>
      <p>Votes: {articleVote}</p>
      <button
        className="fa fa-arrow-down hover-item"
        aria-hidden="true"
        onClick={() => {
          handleClick();
          articleVoteFunc(article.article_id, -1);
        }}
        disabled={isButtonClicked}
      ></button>
    </div>
  );
}

export default Vote;
