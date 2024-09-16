import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../assets/css/about.css";
import MobileApp from "../components/MobileApp";
import aboutBanner from "../assets/images/about/About-Banner-Image.webp";
import aboutBannerMobile from "../assets/images/about/About-Banner-image-Mobile.webp";
import aboutCardImg from "../assets/images/about/about-card-image.png";
import aboutValues1 from "../assets/images/about/Rectangle 14.png";
import aboutValues2 from "../assets/images/about/Rectangle 16.png";
import teamImg1 from "../assets/images/about/Home-category-men.webp";
import teamImg2 from "../assets/images/about/Home-category-women.webp";

const cardData = [
  {
    id: 1,
    name: "Yazhini M",
    subContent:
      "Yazhini, the visionary behind Ive's, launched the company in 2024 to bring high-quality, trendy clothing to customers worldwide. Passionate about fashion, Jane loves traveling and discovering new trends.",
    image: teamImg2,
  },
  {
    id: 2,
    name: "Gokulanath JP",
    subContent:
      "Gokul leads our design team with over 10 years of experience, ensuring each piece is stylish and functional. He enjoys painting and attending fashion shows.",
    image: teamImg1,
  },
  {
    id: 3,
    name: "Yazhini M",
    subContent:
      "Yazhini, the visionary behind Ive's, launched the company in 2024 to bring high-quality, trendy clothing to customers worldwide. Passionate about fashion, Jane loves traveling and discovering new trends.",
    image: teamImg2,
  },
  {
    id: 4,
    name: "Gokulanath JP",
    subContent:
      "Gokul leads our design team with over 10 years of experience, ensuring each piece is stylish and functional. He enjoys painting and attending fashion shows.",
    image: teamImg1,
  },
];

const About = () => {
  const sliderRef1 = useRef(null);
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

  const handlePrevClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev();
  };

  const handleNextClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext();
  };

  return (
    <>
      {/* About Banner Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-about-1">
        <div className="container-fluid">
          {/* Contact Banner Desktop */}
          <div className="row justify-content-center" id="about-card">
            <div className="col-12 text-center">
              <div className="position-relative">
                <img src={aboutBanner} alt="" className="img-fluid w-100" />
                <div className="text-start position-absolute top-50">
                  <span className="d-flex align-items-center">
                    <Link to="/">
                      <i className="bi bi-house"></i>
                    </Link>
                    <i className="bi bi-chevron-right mx-3"></i>
                    <Link to="/about" className="text-decoration-none">
                      <p className="m-0">About us</p>
                    </Link>
                  </span>
                  <h2 className="mt-3">ABOUT US</h2>
                  <p className="mt-3 about-banner-para">
                    At Ive's Clothing, we are dedicated to providing top-quality
                    fashion with a focus on uniqueness and excellent customer
                    service. Discover your style with us
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Content */}

          {/* Contact Banner Mobile */}
          <div className="card border-0" id="about-card-mobile">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="text-start p-4">
                  <h2>About us</h2>
                  <p>
                    At Ive's Clothing, we are dedicated to providing top-quality
                    fashion with a focus on uniqueness and excellent customer
                    service. Discover your style with us
                  </p>
                </div>
              </div>
              <div className="col-12 text-center">
                <img src={aboutBannerMobile} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* End of Content */}
        </div>
      </section>
      {/* End of Section */}

      {/* Our Story Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-about-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <button className="btn about-story-btn">Our Story</button>
              <h2 className="mt-4">About the Ive’s clothing</h2>
              <p className="mt-4">
                Founded in [2002], Ive's Clothing has come a long way from its
                beginnings in Cuddalore. When House of Website first started
                out, their passion for to provide high quality products drove
                them to have comfort, and gave them the impetus to turn hard
                work and inspiration into a booming online store.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="card mt-5 about-card-content">
                <div className="row align-items-center">
                  <div className="col-md-6 p-5">
                    <h2>Our Mission</h2>
                    <p className="mt-3">
                      Our mission is to provide high-quality, trendy clothing
                      that makes you feel confident and stylish. We believe in
                      offering great products at affordable prices and ensuring
                      our customers have a seamless shopping experience.
                    </p>
                  </div>
                  <div className="col-md-6 text-end pt-0 pe-5">
                    <img src={aboutCardImg} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Our Values Section */}
      <section className="lufga b_F9F9F9" id="section-about-3">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <button className="btn about-values-btn">Our Values</button>
              <h2 className="mt-3">OUR PHILOSOPHY</h2>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-10 mt-5">
              <div className="card border-0 our-values-card">
                <div className="row align-items-center">
                  <div className="col-6 ps-5">
                    <h1>01</h1>
                    <h2>Quality :</h2>
                    <h3 className="mt-4">
                      We only offer products we believe in.
                    </h3>
                  </div>
                  <div className="col-md-3 col-12 p-0">
                    <img
                      src={aboutValues2}
                      alt=""
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                  <div className="col-md-3 col-12 p-0">
                    <img
                      src={aboutValues1}
                      alt=""
                      className="img-fluid w-100 h-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Our Team Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-about-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <button className="btn about-ourTeam-btn">Out Team</button>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 col-12 mt-3">
              <h2 className="mt-3">Meet the Team</h2>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <div className="home-arrow text-end me-5  mt-3">
                <button className="" type="button">
                  <i
                    className="bi bi-arrow-left me-4"
                    aria-hidden="true"
                    onClick={handlePrevClick1}
                  ></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="" type="button">
                  <i
                    className="bi bi-arrow-right"
                    aria-hidden="true"
                    onClick={handleNextClick1}
                  ></i>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-12 mt-3">
              <p>
                Meet our dedicated team at Ive's Clothing. We're passionate
                about fashion and committed to providing you with the best
                service and quality.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <Slider ref={sliderRef1} {...settings}>
              {cardData.map((card) => (
                <div className=" border-0" key={card.id}>
                  <div className="about-slider-card position-relative">
                    <img src={card.image} alt="" className="img-fluid w-100" />
                    <div className="position-absolute top-0 left-0 p-5">
                      <h2>{card.name}</h2>
                      <p>{card.subContent}</p>
                      <button className="about-meetTeam-btn mt-3">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* End of Section */}

      <MobileApp />
    </>
  );
};

export default About;
