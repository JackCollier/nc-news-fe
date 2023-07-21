import { useEffect, useState } from "react";
import { patchArticleVotes } from "../utils/Api-Util";

function Vote({ article }) {
  const [articleVote, setArticleVote] = useState(article.votes);
  const [voteStatus, setVoteStatus] = useState(
    parseInt(localStorage.getItem(`vote_${article.article_id}`)) || null
  );
  const [patchSuccess, setPatchSuccess] = useState(true);

  const handleVote = (vote) => {
    if (voteStatus === vote) {
      removeVote();
    } else {
      addVote(vote);
    }
  };

  const addVote = (vote) => {
    setArticleVote((prevNum) => prevNum + vote);
    setVoteStatus(vote);
    localStorage.setItem(`vote_${article.article_id}`, vote);
    patchArticleVotes(article.article_id, vote)
      .then((res) => {})
      .catch((err) => {
        setArticleVote((prevNum) => prevNum - vote);
        setVoteStatus(null);
        localStorage.removeItem(`vote_${article.article_id}`);
        setPatchSuccess(false);
      });
  };

  const removeVote = () => {
    const vote = voteStatus;
    setArticleVote((prevNum) => prevNum - vote);
    setVoteStatus(null);
    localStorage.removeItem(`vote_${article.article_id}`);
    patchArticleVotes(article.article_id, -vote)
      .then((res) => {})
      .catch((err) => {
        setArticleVote((prevNum) => prevNum + vote);
        setVoteStatus(vote);
        localStorage.setItem(`vote_${article.article_id}`, vote);
        setPatchSuccess(false);
      });
  };

  useEffect(() => {
    localStorage.setItem(`vote_${article.article_id}`, voteStatus || "");
  }, [article.article_id, voteStatus]);

  return (
    <div className="vote-section">
      <button
        className={`fa fa-arrow-up hover-item ${
          voteStatus === 1 ? "active" : ""
        }`}
        aria-label="Upvote"
        onClick={() => handleVote(1)}
        disabled={voteStatus === -1}
      ></button>
      <p aria-live="polite">Votes: {articleVote}</p>
      <button
        className={`fa fa-arrow-down hover-item ${
          voteStatus === -1 ? "active" : ""
        }`}
        aria-label="Downvote"
        onClick={() => handleVote(-1)}
        disabled={voteStatus === 1}
      ></button>
      {!patchSuccess && <p role="alert">Vote failed</p>}
    </div>
  );
}

export default Vote;
