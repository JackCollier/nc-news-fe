import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api-Util";
import { useSearchParams, Link } from "react-router-dom";

function DropDown(params) {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOpen = () => {
    setOpen(!open);
  };

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

  useEffect(() => {
    getTopics().then((data) => setTopics(data));
  }, [open]);

  return (
    <>
      <i className="fa fa-bars" aria-hidden="true" onClick={handleOpen}>
        {open ? (
          <div className="dropdown-box">
            <section className="filter-topic-section">
              <p>Filter by Topic:</p>
              {topics.map(({ slug }) => {
                return <p onClick={() => setTopicFilter(slug)}>{slug}</p>;
              })}
            </section>
            <section className="sortby-section">
              <p>Sort by:</p>
              <ul>
                <li onClick={() => setSortFilter("created_at")}>Date</li>
                <li onClick={() => setSortFilter("comment_count")}>
                  Comment Count
                </li>
                <li onClick={() => setSortFilter("votes")}>Votes</li>
              </ul>
            </section>
          </div>
        ) : (
          <div></div>
        )}
      </i>
    </>
  );
}

export default DropDown;
