import { useState } from "react";
import LemonLogo from "./LemonLogo";
import { Link } from "react-router-dom";

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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="reservations">Reservations</Link>
        </li>
        <li>
          <Link to="order">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
