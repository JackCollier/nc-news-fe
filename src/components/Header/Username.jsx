import { useContext } from "react";
import { UserContext } from "../../contexts/User";

function Username(params) {
  const { user, setUser } = useContext(UserContext);

  return <p aria-label={`Logged in as ${user.username}`}>u\{user.username}</p>;
}

export default Username;
