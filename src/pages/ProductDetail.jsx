import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MobileApp from "../components/MobileApp";
import Slider from "react-slick";
import { Rate } from "antd";
import "../assets/css/product.css";
import productImg1 from "../assets/images/product/Product-image-1 (1).webp";
import productImg2 from "../assets/images/product/Product-image-1 (2).webp";
import productImg3 from "../assets/images/product/Product-image-1 (3).webp";
import productImg4 from "../assets/images/product/Product-image-1 (4).webp";
import arrival1 from "../assets/images/home/new-arrival-image (1).png";
import arrival2 from "../assets/images/home/new-arrival-image (2).png";
import arrival3 from "../assets/images/home/new-arrival-image (3).png";

const imageData = [
  {
    productImage1: productImg1,
    productImage2: productImg2,
    productImage3: productImg3,
    productImage4: productImg4,
    shirtName: "Sweet Shirt",
    shirtPrice: "₹ 1342",
    shirtColor: "Black",
    shirtSize1: "XS",
    shirtSize2: "S",
    shirtSize3: "M",
    shirtSize4: "L",
    shirtSize5: "XL",
    shirtSize6: "XXL",
  },
];

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

const reviewData = [
  {
    reviewName: "Samantha D.",
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    postedOn: "August 14, 2023",
  },
  {
    reviewName: "Alex M.",
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    postedOn: "August 15, 2023",
  },
  {
    reviewName: "Ethan R.",
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    postedOn: "August 16, 2023",
  },
  {
    reviewName: "Olivia P.",
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    postedOn: "August 14, 2023",
  },
];

const ProductDetail = () => {
  const [expandedSection, setExpandedSection] = useState("details");

  const handleToggle = (section) => {
    setExpandedSection((prevSection) =>
      prevSection === section ? "" : section
    );
  };

  /* Related Product Section */
  const sliderRef1 = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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

  const handlePrevClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickPrev();
  };

  const handleNextClick1 = () => {
    if (sliderRef1.current) sliderRef1.current.slickNext();
  };

  /* Heart Icon Fill */
  const [filledHearts, setFilledHearts] = useState({});

  const handleHeartClick = (cardId) => {
    setFilledHearts((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  // *************************

  return (
    <>
      {/* Product Hero Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-product-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <span className="d-flex align-items-center">
                <Link to="/">
                  <i className="bi bi-house"></i>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <Link to="/shop-men" className="text-decoration-none">
                  <p className="m-0">Men</p>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <p className="m-0">T-shirt</p>
              </span>
            </div>
          </div>
          <div className="row justify-content-between mt-5">
            <div className="col-md-6">
              {/* Product Images */}
              <div className="product-image-container">
                {imageData.map((productDetails) => (
                  <>
                    <img
                      src={productDetails.productImage1}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <div className="row mt-3">
                      <div className="col-4 thumbnail-image">
                        <img
                          src={productDetails.productImage2}
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="col-4 thumbnail-image">
                        <img
                          src={productDetails.productImage3}
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="col-4 thumbnail-image">
                        <img
                          src={productDetails.productImage4}
                          alt=""
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* End of Product Images */}

              <div className="row">
                <div className="col-12">
                  {/* Details Toggle */}
                  <div className="product-border-btm">
                    <div
                      className="d-flex justify-content-between align-items-center mt-5 product-img-toggle-details"
                      onClick={() => handleToggle("details")}
                      style={{ cursor: "pointer" }}
                    >
                      <h2>Details</h2>
                      <i
                        className={`bi bi-chevron-${
                          expandedSection === "details" ? "up" : "down"
                        }`}
                      ></i>
                    </div>
                    {expandedSection === "details" && (
                      <p className="mt-3">
                        This graphic t-shirt is perfect for any occasion.
                        Crafted from a soft and breathable fabric, it offers
                        superior comfort and style.
                      </p>
                    )}
                  </div>
                  {/* End of Details Toggle */}

                  {/* Delivery Toggle */}
                  <div className="product-border-btm">
                    <div
                      className="d-flex justify-content-between align-items-center mt-5 product-img-toggle-details"
                      onClick={() => handleToggle("delivery")}
                      style={{ cursor: "pointer" }}
                    >
                      <h2>Delivery</h2>
                      <i
                        className={`bi bi-chevron-${
                          expandedSection === "delivery" ? "up" : "down"
                        }`}
                      ></i>
                    </div>
                    {expandedSection === "delivery" && (
                      <p className="mt-3">
                        Delivery information goes here. We offer fast and
                        reliable shipping worldwide.
                      </p>
                    )}
                  </div>
                  {/* End of Delivery Toggle */}

                  {/* Sustainability Toggle */}
                  <div className="product-border-btm">
                    <div
                      className="d-flex justify-content-between align-items-center mt-5 product-img-toggle-details"
                      onClick={() => handleToggle("sustainability")}
                      style={{ cursor: "pointer" }}
                    >
                      <h2>Sustainability</h2>
                      <i
                        className={`bi bi-chevron-${
                          expandedSection === "sustainability" ? "up" : "down"
                        }`}
                      ></i>
                    </div>
                    {expandedSection === "sustainability" && (
                      <p className="mt-3">
                        Sustainability information goes here. Our products are
                        made with environmentally friendly materials.
                      </p>
                    )}
                  </div>
                  {/* End of Sustainability Toggle */}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="mt-md-0 mt-5">
                <button className="product-purchase-btn">
                  +100 USER PURCHASER THIS ITEM
                </button>
              </div>
              {imageData.map((productDetails) => (
                <>
                  <div className="d-flex justify-content-between product-name-price mt-4">
                    <h2>{productDetails.shirtName}</h2>
                    <h2>{productDetails.shirtPrice}</h2>
                  </div>
                  <div className="rate-review-count product-border-btm pb-4">
                    <Rate className="home-card-rating mt-3 me-3" />
                    <span>(13 Reviews)</span>
                  </div>
                  <div className="product-color-name mt-4 product-border-btm">
                    <h2>
                      Color : <span>{productDetails.shirtColor}</span>
                    </h2>
                    <div className="mt-3">
                      <i class="bi bi-circle-fill circle-fill-1"></i>
                      <i class="bi bi-circle-fill circle-fill-2"></i>
                      <i class="bi bi-circle-fill circle-fill-3"></i>
                    </div>
                    <div className="mt-5">
                      <h2>Size </h2>
                      <div className="row mt-4">
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            XXS
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            XS
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            S
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            M
                          </button>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            L
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            XL
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            XXL
                          </button>
                        </div>
                        <div className="col-3">
                          <button className="w-75 btn border-0 product-size-btn">
                            3XL
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="w-100 btn mt-5 border-0 product-add-cart-btn">
                      <i className="bi bi-cart"></i> Add to Cart
                    </button>
                    <button className="w-100 btn mt-5 product-fav-btn">
                      <i class="far fa-heart"></i>Favourite
                    </button>
                    <div className="mt-5 product-free-shipping-content">
                      <p>Free Shipping on orders over ₹9000</p>
                    </div>
                  </div>
                </>
              ))}
              <div className="product-related-heading mt-5">
                <h2>Related Product</h2>
                <div className="mt-4">
                  <Slider ref={sliderRef1} {...settings}>
                    {cardData.map((card) => (
                      <div
                        className="product-slider-card border-0 position-relative"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      <section className="m-lg-5 p-md-5 lufga" id="section-product-2">
        <div className="container-fluid">
          <div className="row mt-md-0 mt-5">
            <div className="col-12 text-center product-ratings-btm">
              <h2 className="mb-4">Rating & Reviews</h2>
              <div class="middle-border"></div>
            </div>
          </div>
          <div className="row justify-content-between mt-5">
            <div className="col-md-6 text-md-start text-center product-all-review-head">
              <h2>
                All Reviews <span>(451)</span>
              </h2>
            </div>
            <div className="col-md-6 text-md-end text-center mt-md-0 mt-4">
              <button className="btn product-review-latest-btn me-4">
                Latest <i className="bi bi-chevron-down ms-2 fs-18"></i>
              </button>
              <button className="btn product-review-write-btn">
                Write a Review
              </button>
            </div>
          </div>
          <div className="row mt-5">
            {reviewData.map((card) => (
              <div className="col-6">
                <div className="product-review-card position-relative card mt-3 p-3">
                  <div className="rate-review-count">
                    <Rate className="home-card-rating mt-3 me-3" />
                    <span>(13)</span>
                  </div>
                  <div className="d-flex">
                    <div className="review-card-title mt-3">
                      {card.reviewName}
                    </div>
                    <div class="tick-icon ms-3">
                      <i class="bi bi-check"></i>
                    </div>
                  </div>
                  <div className="review-card-content mt-3">
                    "{card.review}"
                  </div>
                  <div className="review-card-date mt-3">{card.postedOn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileApp />
    </>
  );
};

export default ProductDetail;
