import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/logo-no-background.png";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaPhone,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
} from "react-icons/fa";

const Header = () => {
  const [navOverlayActive, setNavOverlayActive] = useState(false);

  const handleNavOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setNavOverlayActive(false);
    }
  };

  useEffect(() => {
    const handleToggleClick = () => {
      setNavOverlayActive(!navOverlayActive);
    };

    const button = document.querySelector(".navbar-toggler");
    if (button) {
      button.addEventListener("click", handleToggleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleToggleClick);
      }
    };
  }, [navOverlayActive]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark b_333333 py-3 ps-md-5">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <img src={logo} alt="logo" className="img-fluid logo-main" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`nav-overlay ${navOverlayActive ? "active" : ""}`}
            onClick={handleNavOverlayClick}
          ></div>
          <div
            className={`collapse navbar-collapse ${
              navOverlayActive ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <div className="mx-auto fs-18">
              <ul className="navbar-nav">
                <li className="nav-item mx-3">
                  <NavLink
                    to="/"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                    exact
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/shop"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item mx-3">
                  <NavLink
                    to="/contact"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="fs-18">
              <ul className="navbar-nav">
                <NavLink
                  to="/login"
                  className="nav-link c_fff me-4"
                  activeClassName="active"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/cart"
                  className="c_fff fs-26 cart-icon me-md-5 mx-3"
                  activeClassName="active"
                >
                  <FaShoppingCart />
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
