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
    <>
      <i
        className="fa fa-bars"
        aria-hidden="true"
        onClick={handleOpen}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Toggle Dropdown Menu"
      >
        {open ? (
          <div className="dropdown-box" aria-label="Filter and Sort Options">
            <section className="filter-topic-section">
              <h4>Filter by Topic:</h4>
              {topics.map(({ slug }) => {
                return (
                  <p
                    className="hover-item"
                    onClick={() => setTopicFilter(slug)}
                    key={slug}
                    role="menuitem"
                  >
                    {slug}
                  </p>
                );
              })}
            </section>
            <section className="sortby-section">
              <h4>Sort by:</h4>
              <ul role="menu">
                <li
                  className="hover-item"
                  onClick={() => setSortFilter("created_at")}
                  role="menuitem"
                >
                  Date
                </li>
                <li
                  className="hover-item"
                  onClick={() => setSortFilter("comment_count")}
                  role="menuitem"
                >
                  Comment Count
                </li>
                <li
                  className="hover-item"
                  onClick={() => setSortFilter("votes")}
                  role="menuitem"
                >
                  Votes
                </li>
              </ul>
            </section>
            <section className="order-section">
              <h4>Order by:</h4>
              <button onClick={() => setOrderFilter("ASC")}>Ascending</button>
              <button onClick={() => setOrderFilter("DESC")}>Descending</button>
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
