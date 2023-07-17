import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";
import { Route, Routes } from "react-router-dom";

function MainContainer(params) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articleData) => {
      setArticles(articleData);
    });
  }, []);

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Article articles={articles} />} />
      </Routes>
    </div>
  );
}

export default MainContainer;
