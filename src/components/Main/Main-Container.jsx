import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";
import { Route, Routes } from "react-router-dom";
import PageButtons from "./PageButtons";

function MainContainer(params) {
  const [articles, setArticles] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    getArticles(currentPageNumber).then((articleData) => {
      setArticles(articleData);
    });
  }, [currentPageNumber]);

  const handlePageChange = (binary) => {
    binary
      ? setCurrentPageNumber(currentPageNumber + 1)
      : setCurrentPageNumber(currentPageNumber - 1);
  };

  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Article articles={articles} />} />
      </Routes>
      <section className="page-number-container">
        <PageButtons
          handlePageChange={handlePageChange}
          currentPageNumber={currentPageNumber}
        />
      </section>
    </div>
  );
}

export default MainContainer;
