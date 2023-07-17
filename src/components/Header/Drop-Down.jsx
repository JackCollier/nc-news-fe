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

  const settopicFilter = (topic) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams);
  };

  useEffect(() => {
    getTopics().then((data) => setTopics(data));
  }, [open]);

  return (
    <>
      <i className="fa fa-bars" aria-hidden="true" onClick={handleOpen}>
        {open ? (
          <div className="dropdown-box">
            <p>Filter by Topic:</p>
            {topics.map(({ slug }) => {
              return (
                <Link to={slug}>
                  <p onClick={() => settopicFilter({ slug })}>{slug}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </i>
    </>
  );
}

export default DropDown;
