import React, { useEffect, useState, useRef } from "react";
import "../assets/css/home.css";
import heroBackground from "../assets/images/home/home-background-image.webp";
import heroBackground1 from "../assets/images/home/home-background-image1.webp";
import Slider from "react-slick";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrival1 from "../assets/images/home/new-arrival-image (1).png";
import arrival2 from "../assets/images/home/new-arrival-image (2).png";
import arrival3 from "../assets/images/home/new-arrival-image (3).png";
import whatOfferImage from "../assets/images/home/home-what-we-offer-img.png";
import whatOfferImage1 from "../assets/images/home/Frame 387.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import MobileApp from "../components/MobileApp";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const cardData = [
  {
    id: 1,
    title: "Casual Shirt",
    price: "₹ 1342",
    offerWith: "₹ 999",
    offerWithout: "₹1499",
    description: "This is the first card.",
    imageUrl: arrival1,
  },
  {
    id: 2,
    title: "Casual Shirt",
    price: "₹ 1399",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the second card.",
    imageUrl: arrival2,
  },
  {
    id: 3,
    title: "Casual Shirt",
    price: "₹ 1099",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the third card.",
    imageUrl: arrival3,
  },
  {
    id: 4,
    title: "Casual Shirt",
    price: "₹ 1999",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the fourth card.",
    imageUrl: arrival1,
  },
  {
    id: 5,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the fifth card.",
    imageUrl: arrival2,
  },
];

const whatOffer = [
  {
    slno: 1,
    offerHeading: "Top Notch Quality",
    offerpara:
      "Experience top-notch quality at Ive's Clothing, where we offer premium materials and craftsmanship. Our commitment is to provide durable and stylish apparel",
  },
  {
    slno: 2,
    offerHeading: "Comfort and support",
    offerpara:
      "Enjoy unmatched comfort and support with our carefully selected clothing. Each piece is designed to ensure you feel great all day long",
  },
  {
    slno: 3,
    offerHeading: "Style and versatility",
    offerpara:
      "Embrace style and versatility with our curated collection. From timeless classics to contemporary trends, we offer fashion that adapts to every occasion.",
  },
];

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });

    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: ".we-offer-image",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1,
      },
    });

    timeln.addLabel("card1");
    timeln.to(".image-1", {
      xPercent: 0,
      opacity: 1,
    });

    timeln.from(".image-2", {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel("card2");

    timeln.to(
      ".image-1",
      {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5,
      },
      "-=0.3"
    );

    timeln.to(".image-2", {
      xPercent: 0,
      opacity: 1,
    });

    timeln.from(".image-3", {
      xPercent: 75,
      opacity: 0,
    });
    timeln.addLabel("card3");

    timeln.to(
      ".image-2",
      {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6,
      },
      "-=0.3"
    );

    timeln.to(".image-3", {
      xPercent: 0,
      opacity: 1,
    });

    timeln.to(".image-3", {});
  }, []);

  /* Slider Start */

  /* New Arrival and Offers Zone Section */
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

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
  // *************************

  /* Recommended For You Section */
  const sliderRef3 = useRef(null);

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings1: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // *************************

  /* Heart Icon Fill */
  const [filledHearts, setFilledHearts] = useState({});

  const handleHeartClick = (cardId) => {
    setFilledHearts((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  // *************************

  /* New Arrival Section */
  const handlePrevClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev();
  };

  const handleNextClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext();
  };
  // *************************

  /* Offers Zone Section */
  const handlePrevClick2 = () => {
    if (sliderRef2.current) sliderRef2.current.slickPrev();
  };

  const handleNextClick2 = () => {
    if (sliderRef2.current) sliderRef2.current.slickNext();
  };
  // *************************

  /* Recommended For You Section */
  const handlePrevClick3 = () => {
    if (sliderRef3.current) sliderRef3.current.slickPrev();
  };

  const handleNextClick3 = () => {
    if (sliderRef3.current) sliderRef3.current.slickNext();
  };
  // *************************

  /* Slider End */

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
                    <i
                      className="bi bi-arrow-left me-md-4 me-0"
                      aria-hidden="true"
                    ></i>
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
                <button className="" type="button" onClick={handlePrevClick1}>
                  <i className="bi bi-arrow-left me-4" aria-hidden="true"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="" type="button" onClick={handleNextClick1}>
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5 border-0">
              {/* Carousel Slider */}
              <Slider ref={sliderRef1} {...settings}>
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
                    <div className="rate-review-count">
                      <Rate className="home-card-rating mt-3 me-3" />
                      <span>(13)</span>
                    </div>
                    <div className="mt-3 product-color-name">
                      <i class="bi bi-circle-fill circle-fill-1"></i>
                      <i class="bi bi-circle-fill circle-fill-2"></i>
                      <i class="bi bi-circle-fill circle-fill-3"></i>
                    </div>
                    <div
                      className="position-absolute card-add-to-icon"
                      onClick={() => handleHeartClick(card.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={`fa${
                          filledHearts[card.id] ? "s" : "r"
                        } fa-heart fs-24`}
                        style={{
                          color: filledHearts[card.id] ? "red" : "black",
                        }}
                      ></i>
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

      {/* Our Categories Section */}
      <section
        className="p-lg-5 p-3 py-md-0 py-5 lufga b_F9F9F9"
        id="section-home-3"
      >
        <div className="container-fluid section-home-3-card">
          <div className="row">
            <div className="col-12 text-center">
              <button className="home-categories-btn">Our Categories</button>
              <h2 className="text-center mt-4">Main Categories</h2>
              <p className="text-center">
                Discover our main categories at Ive's Clothing : men's and
                women's fashion, and stylish <br />
                accessories. Find the perfect outfit for any occasion
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-md-5">
            <div className="col-xl-4 col-lg-5 col-md-6 col-12">
              <div
                className="card home-card-men p-5"
                data-aos="zoom-in-down"
                data-aos-offset="300"
              >
                <h2>For Men</h2>
                <p>
                  Discover the latest in men's fashion at Ive's Clothing. Shop
                  quality and stylish apparel for every occasion
                </p>
                <Link to={"/shop-men"}>
                  <button className="btn home-learn-more-btn">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-12 mt-md-0 mt-3">
              <div
                className="card home-card-women p-5"
                data-aos="zoom-in-up"
                data-aos-offset="300"
              >
                <h2>For Women</h2>
                <p>
                  Explore the latest women's fashion at Ive's Clothing. Find
                  stylish and quality apparel for every occasion
                </p>
                <Link to={"/shop-women"}>
                  <button className="btn home-learn-more-btn">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-xl-8 col-lg-10 col-12">
              <div
                className="card home-card-accessories p-5"
                data-aos="zoom-in-up"
                data-aos-offset="300"
              >
                <div className="row">
                  <div className="col-md-7">
                    <h2>For Accessories</h2>
                    <p>
                      Complete your look with our men's accessories at Ive's
                      Clothing. Discover quality and stylish pieces for every
                      occasion.
                    </p>
                    <Link to={"/shop-accessories"}>
                      <button className="btn home-learn-more-btn">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Offers Zone Section */}
      <section className="m-lg-5 m-3 p-lg-5 p-3 lufga" id="section-home-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button className="home-offer-zone-btn">+ 13 ITEM</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 col-12 mt-3">
              <h2 className="mt-3">Offers Zone</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <div className="home-arrow text-end me-5  mt-3">
                <button className="" type="button" onClick={handlePrevClick2}>
                  <i className="bi bi-arrow-left me-4" aria-hidden="true"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="" type="button" onClick={handleNextClick2}>
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              {/* Carousel Slider */}
              <Slider ref={sliderRef2} {...settings}>
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
                      <div className="d-flex">
                        <div className="home-card-offerWith me-3">
                          {card.offerWith}
                        </div>
                        <div className="home-card-offerWithout">
                          {card.offerWithout}
                        </div>
                      </div>
                    </div>
                    <div className="rate-review-count">
                      <Rate className="home-card-rating mt-3 me-3" />
                      <span>(13)</span>
                    </div>
                    <div className="mt-3 product-color-name">
                      <i class="bi bi-circle-fill circle-fill-1"></i>
                      <i class="bi bi-circle-fill circle-fill-2"></i>
                      <i class="bi bi-circle-fill circle-fill-3"></i>
                    </div>
                    <div
                      className="position-absolute card-add-to-icon"
                      onClick={() => handleHeartClick(card.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={`fa${
                          filledHearts[card.id] ? "s" : "r"
                        } fa-heart fs-24`}
                        style={{
                          color: filledHearts[card.id] ? "red" : "black",
                        }}
                      ></i>
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

      {/* What We Offer Section */}
      <section className="lufga b_F9F9F9" id="section-home-5">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5">
              <div className="mb-5">
                <button className="home-whatwe-offer-btn">
                  At Ive’s Clothing
                </button>
                <h2 className="mt-4">What We Offer</h2>
              </div>
              {whatOffer.map((offer) => (
                <>
                  <div className="d-flex align-items-start py-4">
                    <span className="slno">{offer.slno}</span>
                    <div className="ms-4">
                      <h3 className="fw-semibold">{offer.offerHeading}</h3>
                      <p className="mt-4">{offer.offerpara}</p>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
            <div className="col-md-5 text-center">
              <img src={whatOfferImage} alt="" className="img-fluid" />
              {/* <div className="we-offer-image">
                <div>
                  <img
                    src={whatOfferImage1}
                    alt="Offer 1"
                    className="offerImage image-1 img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={whatOfferImage1}
                    alt="Offer 2"
                    className="offerImage image-2 img-fluid"
                  />
                </div>
                <div>
                  <img
                    src={whatOfferImage1}
                    alt="Offer 3"
                    className="offerImage image-3 img-fluid"
                  />
                </div>
              </div> */}
              <div className="card text-start p-4 review">
                <div className="d-flex justify-content-between">
                  <Rate className="home-card-rating mb-3" />
                  <button className="btn border-0 dots-3">...</button>
                </div>
                <div className="d-flex align-items-center">
                  <h4>Samantha D.</h4>
                  <div class="tick-icon">
                    <i class="bi bi-check"></i>
                  </div>
                </div>
                <p className="review-content mt-3">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p className="review-date mt-4">Posted on August 14, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Recommended For You Section */}
      <section className="m-lg-5 m-3 p-lg-5 p-3 lufga" id="section-home-6">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button className="home-offer-zone-btn">Recommended</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 col-12 mt-3">
              <h2 className="mt-3">Recommended For You</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <div className="home-arrow text-end me-5  mt-3">
                <button className="" type="button" onClick={handlePrevClick3}>
                  <i className="bi bi-arrow-left me-4" aria-hidden="true"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="" type="button" onClick={handleNextClick3}>
                  <i className="bi bi-arrow-right" aria-hidden="true"></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5">
              {/* Carousel Slider */}
              <Slider ref={sliderRef3} {...settings1}>
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
                    <div className="rate-review-count">
                      <Rate className="home-card-rating mt-3 me-3" />
                      <span>(13)</span>
                    </div>
                    <div className="mt-3 product-color-name">
                      <i class="bi bi-circle-fill circle-fill-1"></i>
                      <i class="bi bi-circle-fill circle-fill-2"></i>
                      <i class="bi bi-circle-fill circle-fill-3"></i>
                    </div>
                    <div
                      className="position-absolute card-add-to-icon"
                      onClick={() => handleHeartClick(card.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i
                        className={`fa${
                          filledHearts[card.id] ? "s" : "r"
                        } fa-heart fs-24`}
                        style={{
                          color: filledHearts[card.id] ? "red" : "black",
                        }}
                      ></i>
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

      <MobileApp />
    </>
  );
};

export default Home;
