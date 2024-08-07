import React from "react";
import "../assets/css/home.css";
import heroBackground from "../assets/images/home/home-background-image.webp";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="m-md-5 p-md-5 lufga" id="section-home-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className="position-relative carousel slide"
                id="carouselHome"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active position-relative">
                    <img
                      src={heroBackground}
                      alt=""
                      className="img-fluid w-100"
                      id="hero-background-img"
                    />
                    <div className="position-absolute home-heading">
                      <h2 className="text-start fw-bold">
                        RELEASE STYLE <br />
                        WITH <span>CONFIDENCE</span>
                      </h2>
                      <p>
                        Indulge in pure comfort with our T-shirts. Soft,
                        <br /> breathable fabrics guarantee an unmatched
                        <br /> cozy fit for your everyday relaxation.
                      </p>
                      <button className="home-shop-btn">SHOP NOW <i className="bi bi-arrow-right ms-2 fs-20"></i></button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src={heroBackground}
                      alt=""
                      className="img-fluid w-100"
                      id="hero-background-img"
                    />
                  </div>
                </div>
                <div className="position-absolute home-arrow">
                  <button
                    class=""
                    type="button"
                    data-bs-target="#carouselHome"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-arrow-left me-4" aria-hidden="true"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class=""
                    type="button"
                    data-bs-target="#carouselHome"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}
    </>
  );
};

export default Home;
