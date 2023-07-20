import { useContext } from "react";
import { UserContext } from "../../contexts/User";

function Username(params) {
  const { user, setUser } = useContext(UserContext);

  return <p>u\{user.username}</p>;
}

export default Username;
