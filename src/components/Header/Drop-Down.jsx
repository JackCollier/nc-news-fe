import { useState, useEffect } from "react";

function DropDown(params) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <i className="fa fa-bars" aria-hidden="true" onClick={handleOpen}>
        {open ? <div>open</div> : <div></div>}
      </i>
    </>
  );
}

export default DropDown;
