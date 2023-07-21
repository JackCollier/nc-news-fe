import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/User";
import { getUsers } from "../utils/Api-Util";

function Username(params) {
  const { user, setUser } = useContext(UserContext);
  const [userArray, setUserArray] = useState();
  const [open, setOpen] = useState(false);

  console.log(user);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getUsers().then((res) => {
      setUserArray(res);
    });
  }, []);

  return (
    <div className="user-area-container">
      <button
        className="hidden-button"
        onClick={handleOpen}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Toggle Dropdown Menu"
      >
        <i className="fa fa-users hover-item" aria-hidden="true"></i>
      </button>
      {open && (
        <div className="user-menu">
          {userArray.map(({ username }) => {
            return (
              <p onClick={() => setUser({ username: username })}>{username}</p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Username;
