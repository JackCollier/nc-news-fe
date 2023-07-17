import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api-Util";
import { Link } from "react-router-dom";

function DropDown(params) {
  const [open, setOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  const handleOpen = () => {
    setOpen(!open);
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
                <Link>
                  <p>{slug}</p>
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
