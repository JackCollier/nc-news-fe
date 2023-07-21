import { useEffect, useState } from "react";
import Article from "./Article";
import { getArticles } from "../utils/Api-Util";
import { useParams } from "react-router-dom";
import PageButtons from "./PageButtons";
import { useSearchParams, Link } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";

function MainContainer(params) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const topicParam = searchParams.get("topics");
    const sortByParam = searchParams.get("sortby");
    const sortByOrder = searchParams.get("order");
    getArticles(currentPageNumber, topicParam, sortByParam, sortByOrder)
      .then((articleData) => {
        setArticles(articleData);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data || err.response.statusText);
      });
  }, [currentPageNumber, searchParams]);

  const handlePageChange = (binary) => {
    binary
      ? setCurrentPageNumber(currentPageNumber + 1)
      : setCurrentPageNumber(currentPageNumber - 1);
  };

  if (error) {
    return <Error message={error} />;
  }

  if (isLoading) return <Loading />;

  return (
    <div className="main-container">
      <Article articles={articles} />
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
