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
}

export default Username;
