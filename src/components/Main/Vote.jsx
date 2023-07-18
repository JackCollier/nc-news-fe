import { useEffect, useState } from "react";
import { patchArticleVotes } from "../utils/Api-Util";

function Vote({ article }) {
  const [articleVote, setArticleVote] = useState(article.votes);
  const [isButtonClicked, setIsButtonClicked] = useState(
    localStorage.getItem(`vote_${article.article_id}`) === "true"
  );
  const [patchSuccess, setPatchSuccess] = useState(true);

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
        setPatchSuccess(false);
      });
  };

  useEffect(() => {
    localStorage.setItem(`vote_${article.article_id}`, isButtonClicked);
  }, [isButtonClicked, article.article_id]);

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
      {!patchSuccess ? <p>Vote failed</p> : null}
    </div>
  );
}

export default Vote;
