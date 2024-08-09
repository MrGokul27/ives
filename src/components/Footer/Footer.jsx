import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/css/footer.css";
import logo from "../../assets/images/logo/create-a-flat-vector-illustrative-style-wordmark-l-g4AGv1XyRiy7KqLxZOhJVg-_lPGm5SRQ1u6r5GNrPDeFQ1.jpeg";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="mx-md-5 mx-3 px-md-5 px-3 pt-5 lufga footer">
        <div className="container-fluid">
          <div className="row footer-border-1">
            <div className="col-lg-8 col-12">
              <div className="row footer-border-2 py-md-5">
                <div className="col-md-6 col-12 footer-section-1">
                  <NavLink to="/" className="navbar-brand">
                    <img
                      src={logo}
                      alt="logo"
                      className="img-fluid logo-main"
                    />
                  </NavLink>
                  <p className="footer-content mt-3">
                    Welcome to Ive's Clothing, your top source for quality,
                    unique fashion with excellent customer service.{" "}
                  </p>
                </div>
                <div className="col-md-6 col-12 d-md-flex justify-content-evenly">
                  <div className="mt-md-0 mt-4">
                    <h3 className="footer-heading-link">Details</h3>
                    <ul className="list-unstyled mt-4">
                      <li className="">
                        <NavLink to="/" className="footer-link">
                          Home
                        </NavLink>
                      </li>
                      <li className="mt-2">
                        <NavLink to="/about" className="footer-link">
                          About Us
                        </NavLink>
                      </li>
                      <li className="mt-2">
                        <NavLink to="/blog" className="footer-link">
                          Blog
                        </NavLink>
                      </li>
                      <li className="mt-2">
                        <NavLink to="/contact" className="footer-link">
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <h3 className="footer-heading-link">Store</h3>
                    <ul className="list-unstyled mt-4">
                      <li className="">
                        <NavLink to="/men" className="footer-link">
                          Men
                        </NavLink>
                      </li>
                      <li className="mt-2">
                        <NavLink to="/women" className="footer-link">
                          Women
                        </NavLink>
                      </li>
                      <li className="mt-2">
                        <NavLink to="/accessories" className="footer-link">
                          Accessories
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 ps-lg-5">
              <div className="row py-5">
                <div className="col-12">
                  <h3 className="footer-heading-link">
                    Subscribe To Our News Letter
                  </h3>
                  <form className="mt-5 w-xl-50 w-md-50 w-100">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        aria-label="Enter your email"
                        aria-describedby="button-addon2"
                      />
                      <div className="footer-arrow">
                        <button className="" type="button" id="button-addon2">
                          <i
                            className="bi bi-arrow-right "
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Section */}

      {/* Copyrights */}
      <footer className="mx-md-5 px-5 pb-3 lufga footer">
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-8 text-md-start text-center">
              <p>Ive’s Clothing © 2002-2024, All Rights Reserved</p>
            </div>
            <div className="col-md-4 text-md-end text-center">
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  className="footer-link me-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="footer-link me-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://pinterest.com"
                  className="footer-link me-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-pinterest"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End of Section */}
    </>
  );
};

export default Footer;
