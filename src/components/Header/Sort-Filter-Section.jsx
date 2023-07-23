import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api-Util";
import { useSearchParams, Link } from "react-router-dom";

function SortFilter(params) {
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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
      <section className="topic-section">
        <select name="topic" id="topic">
          {topics.map(({ slug }) => {
            return (
              <option key={slug} onClick={() => setTopicFilter(slug)}>
                {slug}
              </option>
            );
          })}
        </select>
      </section>
      <section className="sort-section">
        <select name="sort" id="sort"></select>
      </section>
    </div>
  );
}

export default SortFilter;
