import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/notFound.css";

const NotFound = () => {
  return (
    <section className="my-5 py-5" id="section-not-found">
      <div className="not-found">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="back-home">
          Go Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
