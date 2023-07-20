import DropDown from "./Drop-Down";
import Title from "./Title";
import Username from "./Username";

function HeaderContainer() {
  return (
    <header className="header-container">
      <Username />
      <Title />
      <DropDown />
    </header>
  );
}

export default HeaderContainer;
