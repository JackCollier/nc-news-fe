import { useState, useEffect } from "react";
import { getTopics } from "../utils/Api-Util";

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
        {open ? <div className="dropdown-box"></div> : <div></div>}
      </i>
    </>
  );
}

export default DropDown;
