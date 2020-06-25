import React from "react";
import { Link } from "react-router-dom";
import toggle from "../helper/index";
const Nav = ({text}) => {
  return (
    <nav>
      <div onClick={toggle} className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
  <h4 className="current-text">{text}</h4>
      <ul className="nav-links">
        <li onClick={toggle}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggle}>
          <Link to="/profile">Profile</Link>
        </li>
        <li onClick={toggle}>
          <Link>Logout</Link>
        </li>
      </ul>
      <div className="profile has-text-danger has-background-black">
        <i class="fas fa-lock"></i>
      </div>
    </nav>
  );
};

export default Nav;
