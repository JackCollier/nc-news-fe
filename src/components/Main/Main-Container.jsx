import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";

function MainContainer(params) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);

  return (
    <div className="main-container">
      <Article articles={articles} />
    </div>
  );
}

export default MainContainer;
