import { useState } from "react";
import LemonLogo from "./LemonLogo";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const hamburgerMenuClickHandler = () => {
    const menu = document.querySelector(".main_menu");

    if (menuIsOpen) {
      menu.style.display = "none";
      setMenuIsOpen(false);
    } else if (!menuIsOpen) {
      menu.style.display = "grid";
      setMenuIsOpen(true);
    }
  };

  return (
    <nav>
      <div className="mobileHeader">
        <LemonLogo />
        <button className="hamburger" onClick={hamburgerMenuClickHandler}>
          Menu
        </button>
      </div>
      <ul className="main_menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
