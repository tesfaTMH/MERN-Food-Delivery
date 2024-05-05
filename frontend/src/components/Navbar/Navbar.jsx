import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={assets.logo} alt="" className="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active nav-link" : "nav-link"}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active nav-link" : "nav-link"}
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active nav-link" : "nav-link"}
            >
              Mobile-app
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active nav-link" : "nav-link"}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div className="navbar-search-icon mx-1">
          <img className="mx-2" src={assets.search_icon} alt="" />
          <img className="p-3" src={assets.basket_icon} alt="" />
          <div className="dot"></div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
