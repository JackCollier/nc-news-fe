import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api-Util";
import { useSearchParams, Link } from "react-router-dom";

function SortFilter(params) {
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortArray = ["created_at", "comment_count", "votes"];

  const setTopicFilter = (topic) => {
    setSearchParams((newParams) => {
      newParams.set("topics", topic);
      return newParams;
    });
  };

  const setSortFilter = (sortby) => {
    setSearchParams((newParams) => {
      newParams.set("sortby", sortby);
      return newParams;
    });
  };

  const setOrderFilter = (order) => {
    setSearchParams((newParams) => {
      newParams.set("order", order);
      return newParams;
    });
  };

  useEffect(() => {
    getTopics().then((data) => setTopics(data));
  }, []);

  return (
    <div className="drop-container">
      <div className="topic-sort-flex">
        <section className="topic-section">
          <select
            name="topic"
            id="topic"
            className="topic-select"
            onChange={(e) => setTopicFilter(e.target.value)}
          >
            {topics.map(({ slug }) => {
              return <option key={slug}>{slug}</option>;
            })}
          </select>
        </section>
        <section className="sort-section">
          <select name="sort" id="sort" className="sort-select">
            {sortArray.map((sort) => {
              return (
                <option key={sort} onClick={() => setSortFilter(sort)}>
                  {sort}
                </option>
              );
            })}
          </select>
        </section>
      </div>
      <section className="order-section">
        <button onClick={() => setOrderFilter("DESC")} className="order-select">
          <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
        </button>
        <button onClick={() => setOrderFilter("ASC")} className="order-select">
          <i class="fa fa-sort-amount-asc" aria-hidden="true"></i>
        </button>
      </section>
    </div>
  );
}

export default SortFilter;
