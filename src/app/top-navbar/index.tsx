import React from "react";
import "./top-navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-tabs">
      <a href="#" className="nav-tab shop-tab">
        SHOP
      </a>
      <a href="#" className="nav-tab hide-on-mobile">
        SKILLS
      </a>
      <a href="#" className="nav-tab hide-on-mobile">
        STORIES
      </a>
      <a href="#" className="nav-tab hide-on-mobile">
        ABOUT
      </a>
      <a href="#" className="nav-tab hide-on-mobile">
        CONTACT US
      </a>
    </nav>
  );
};

export default NavBar;
