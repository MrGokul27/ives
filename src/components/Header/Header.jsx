import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/navbar.css";
import logo from "../../assets/images/logo/create-a-flat-vector-illustrative-style-wordmark-l-g4AGv1XyRiy7KqLxZOhJVg-_lPGm5SRQ1u6r5GNrPDeFQ1.jpeg";

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
      <nav className="navbar navbar-expand-lg b_fcfcfc ps-md-5 lufga">
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
            <div className="mx-auto fs-22">
              <ul className="navbar-nav align-items-center">
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
                <li className="nav-item mx-3">
                  <label className="search-container">
                    <input
                      className="form-control mr-sm-2 search-input"
                      type="search"
                      placeholder="Search for products..."
                      aria-label="Search"
                    />
                    <button type="button" className="search-button border-0">
                      <i className="fas fa-search"></i>
                    </button>
                  </label>
                </li>
              </ul>
            </div>
            <div className="mx-end">
              <ul className="navbar-nav align-items-center">
                
                <NavLink
                  to=""
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="far fa-heart fs-24 me-md-2 mt-md-1"></i>
                </NavLink>
                <NavLink
                  to="/cart"
                  className="nav-link"
                  activeClassName="active"
                >
                  <i className="bi bi-cart fs-24 me-md-3"></i>
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  <button className="login-btn">Login</button>
                </NavLink>
                <NavLink
                  to="/login"
                  className="nav-link"
                  activeClassName="active"
                >
                  <button className="signup-btn me-xl-5">Sign Up</button>
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
