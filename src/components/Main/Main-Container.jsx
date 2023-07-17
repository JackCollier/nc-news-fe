import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";
import { Route, Routes } from "react-router-dom";
import PageButtons from "./PageButtons";

function MainContainer(params) {
  const [articles, setArticles] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  console.log(currentPageNumber);

  useEffect(() => {
    getArticles(currentPageNumber).then((articleData) => {
      setArticles(articleData);
      console.log(articleData);
    });
  }, [currentPageNumber]);

  const handlePageChange = (binary) => {
    if (binary) {
      setCurrentPageNumber(currentPageNumber + 1);
    } else {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Article articles={articles} />} />
      </Routes>
      <section>
        <PageButtons handlePageChange={handlePageChange} />
      </section>
    </div>
  );
}

export default MainContainer;
