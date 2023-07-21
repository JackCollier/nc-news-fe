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
            <section className="topic-section">
              <h4 className="menu-title">Filter by Topic:</h4>
              {topics.map(({ slug }) => {
                return (
                  <p
                    className="hover-item menu-item"
                    onClick={() => setTopicFilter(slug)}
                    key={slug}
                    role="menuitem"
                  >
                    {slug}
                  </p>
                );
              })}
            </section>
            <section className="topic-section">
              <h4 className="menu-title">Sort by:</h4>
              <p
                className="hover-item menu-item"
                onClick={() => setSortFilter("created_at")}
                role="menuitem"
              >
                Date
              </p>
              <p
                className="hover-item menu-item"
                onClick={() => setSortFilter("comment_count")}
                role="menuitem"
              >
                Comment Count
              </p>
              <p
                className="hover-item menu-item"
                onClick={() => setSortFilter("votes")}
                role="menuitem"
              >
                Votes
              </p>
            </section>
            <section className="order-section">
              <h4 className="menu-title">Order:</h4>
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
