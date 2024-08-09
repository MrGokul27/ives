import React, { useRef } from "react";
import "../assets/css/home.css";
import heroBackground from "../assets/images/home/home-background-image.webp";
import Slider from "react-slick";
import { Rate } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrival1 from "../assets/images/home/new-arrival-image (1).png";
import arrival2 from "../assets/images/home/new-arrival-image (2).png";
import arrival3 from "../assets/images/home/new-arrival-image (3).png";

const cardData = [
  {
    id: 1,
    title: "Casual Shirt",
    price: "₹ 1342",
    description: "This is the first card.",
    imageUrl: arrival1,
  },
  {
    id: 2,
    title: "Casual Shirt",
    price: "₹ 1399",
    description: "This is the second card.",
    imageUrl: arrival2,
  },
  {
    id: 3,
    title: "Casual Shirt",
    price: "₹ 1099",
    description: "This is the third card.",
    imageUrl: arrival3,
  },
  {
    id: 4,
    title: "Casual Shirt",
    price: "₹ 1999",
    description: "This is the fourth card.",
    imageUrl: arrival1,
  },
  {
    id: 5,
    title: "Casual Shirt",
    price: "₹ 1654",
    description: "This is the fifth card.",
    imageUrl: arrival2,
  },
];

const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-home-1">
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
                      <button className="home-shop-btn">
                        SHOP NOW{" "}
                        <i className="bi bi-arrow-right ms-2 fs-20"></i>
                      </button>
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
                <div className="position-absolute home-arrow" id="home-arr">
                  <button
                    className=""
                    type="button"
                    data-bs-target="#carouselHome"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-arrow-left me-md-4 me-0" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className=""
                    type="button"
                    data-bs-target="#carouselHome"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* New Arrival Section */}
      <section className="m-lg-5 m-3 p-lg-5 p-3 lufga" id="section-home-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button className="home-arrival-btn">New Arrival</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="mt-3">Explore What’s New</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 col-12 mt-3">
              <p>
                Be the first in fashion and unveil the newest trends and must -
                have pieces
              </p>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <div className="home-arrow text-end me-5  mt-3">
                <button className="" type="button" onClick={handlePrevClick}>
                  <i className="bi bi-arrow-left me-4" aria-hidden="true"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="" type="button" onClick={handleNextClick}>
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              {/* Carousel Slider */}
              <Slider ref={sliderRef} {...settings}>
                {cardData.map((card) => (
                  <div
                    className="home-slider-card border-0 position-relative"
                    key={card.id}
                  >
                    <img
                      src={card.imageUrl}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <div className="d-flex justify-content-between mt-4">
                      <div className="home-card-title">{card.title}</div>
                      <div className="home-card-price">{card.price}</div>
                    </div>
                    <Rate className="home-card-rating mt-3" />
                    <div className="position-absolute card-add-to-icon">
                      <i className="far fa-heart fs-24"></i>
                    </div>
                  </div>
                ))}
              </Slider>
              {/* Carousel Slider End */}
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}
    </>
  );
};

export default Home;
