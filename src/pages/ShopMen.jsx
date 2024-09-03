import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import "../assets/css/shop.css";
import MobileApp from "../components/MobileApp";
import arrival1 from "../assets/images/home/new-arrival-image (1).png";
import arrival2 from "../assets/images/home/new-arrival-image (2).png";
import arrival3 from "../assets/images/home/new-arrival-image (3).png";

import { fetchProducts } from "../services/api";

const cardData = [
  {
    id: 1,
    title: "Casual Shirt",
    price: "₹ 1342",
    offerWith: "₹ 999",
    offerWithout: "₹1499",
    description: "This is the 1st card.",
    imageUrl: arrival1,
  },
  {
    id: 2,
    title: "Casual Shirt",
    price: "₹ 1399",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 2nd card.",
    imageUrl: arrival2,
  },
  {
    id: 3,
    title: "Casual Shirt",
    price: "₹ 1099",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 3rd card.",
    imageUrl: arrival3,
  },
  {
    id: 4,
    title: "Casual Shirt",
    price: "₹ 1999",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 4th card.",
    imageUrl: arrival1,
  },
  {
    id: 5,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 5th card.",
    imageUrl: arrival2,
  },
  {
    id: 6,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 6th card.",
    imageUrl: arrival3,
  },
  {
    id: 7,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 7th card.",
    imageUrl: arrival1,
  },
  {
    id: 8,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 8th card.",
    imageUrl: arrival2,
  },
  {
    id: 9,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 9th card.",
    imageUrl: arrival3,
  },
];

const ShopMen = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");

  const [expandedSections, setExpandedSections] = useState({
    subcategories: true,
    size: true,
    brand: false,
    price: false,
  });

  const [filledHearts, setFilledHearts] = useState({});

  const handleHeartClick = (cardId) => {
    setFilledHearts((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleCheckboxChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    setSelectedSize("");
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonClass = (buttonId) => {
    return buttonId === activeButton ? "btn-active" : "btn-inactive";
  };

  return (
    <>
      <section className="m-lg-5 p-md-5 lufga" id="section-shop-1">
        <div className="container-fluid">
          <div className="row">
            {/* Filter Section */}
            <div className="col-lg-3 col-md-4">
              <div className="shop-side-heading-1">
                <h2>Products</h2>
              </div>
              <div className="me-5">
                {/* Filter */}
                <div className="shop-filter-border-btm">
                  <div className="d-flex flex-wrap shop-side-heading-2 mb-4">
                    {selectedFilters.map((filter, index) => (
                      <div
                        key={index}
                        className="d-flex shop-filter-cancel mt-3 me-4"
                      >
                        <p className="mb-0 mt-1">{filter}</p>
                        <i
                          className="bi bi-x ms-3"
                          onClick={() => handleCheckboxChange(filter)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    ))}
                  </div>
                  {selectedFilters.length > 0 && (
                    <a
                      href="#"
                      onClick={clearFilters}
                      className="shop-clear-filter"
                    >
                      Clear Filter
                    </a>
                  )}
                </div>
                {/* Subcategories */}
                <div className="shop-filter-border-btm">
                  <div
                    className="d-flex justify-content-between mt-4 shop-side-heading-3"
                    onClick={() => toggleSection("subcategories")}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Subcategories</h2>
                    <i
                      className={`bi bi-chevron-${
                        expandedSections.subcategories ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                  {expandedSections.subcategories && (
                    <div className="mt-3">
                      <div className="form-check mt-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="tshirt"
                          checked={selectedFilters.includes("T-shirt")}
                          onChange={() => handleCheckboxChange("T-shirt")}
                        />
                        <label className="form-check-label" htmlFor="tshirt">
                          T-shirt
                        </label>
                      </div>
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="shirt"
                          checked={selectedFilters.includes("Shirt")}
                          onChange={() => handleCheckboxChange("Shirt")}
                        />
                        <label className="form-check-label" htmlFor="shirt">
                          Shirt
                        </label>
                      </div>
                      <div className="form-check mt-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="jacket"
                          checked={selectedFilters.includes("Jacket")}
                          onChange={() => handleCheckboxChange("Jacket")}
                        />
                        <label className="form-check-label" htmlFor="jacket">
                          Jacket
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                {/* Size */}
                <div className="shop-filter-border-btm">
                  <div
                    className="d-flex justify-content-between mt-4 shop-side-heading-4"
                    onClick={() => toggleSection("size")}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Size</h2>
                    <i
                      className={`bi bi-chevron-${
                        expandedSections.size ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                  {expandedSections.size && (
                    <div className="d-flex flex-wrap mt-3 shop-sizes">
                      {["S", "M", "L", "XL", "XXL"].map((size) => (
                        <div className="form-check me-3" key={size}>
                          <input
                            className="form-check-input"
                            type="radio"
                            id={size}
                            name="size"
                            checked={selectedSize === size}
                            onChange={() => handleSizeChange(size)}
                          />
                          <label className="form-check-label" htmlFor={size}>
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* Brand */}
                <div className="shop-filter-border-btm">
                  <div
                    className="d-flex justify-content-between mt-4 shop-side-heading-5"
                    onClick={() => toggleSection("brand")}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Brand</h2>
                    <i
                      className={`bi bi-chevron-${
                        expandedSections.brand ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                  {expandedSections.brand && <div className="mt-3"></div>}
                </div>
                {/* Price */}
                <div className="shop-filter-border-btm">
                  <div
                    className="d-flex justify-content-between mt-4 shop-side-heading-6"
                    onClick={() => toggleSection("price")}
                    style={{ cursor: "pointer" }}
                  >
                    <h2>Price</h2>
                    <i
                      className={`bi bi-chevron-${
                        expandedSections.price ? "up" : "down"
                      }`}
                    ></i>
                  </div>
                  {expandedSections.price && <div className="mt-3"></div>}
                </div>
              </div>
            </div>
            {/* End of Section */}
            <div className="col-lg-9 col-md-8">
              <div className="mt-md-0 mt-5">
                <span className="d-flex align-items-center">
                  <Link to="/">
                    <i className="bi bi-house"></i>
                  </Link>
                  <i className="bi bi-chevron-right mx-3"></i>
                  <Link to="/shop-men" className="text-decoration-none">
                    <p className="m-0">Men</p>
                  </Link>
                </span>
              </div>
              <div className="row">
                <div className="col mt-4">
                  <button
                    className={getButtonClass("all")}
                    onClick={() => handleButtonClick("all")}
                  >
                    All
                  </button>
                  <button
                    className={getButtonClass("upperBody")}
                    onClick={() => handleButtonClick("upperBody")}
                  >
                    Upper body
                  </button>
                  <button
                    className={getButtonClass("bottoms")}
                    onClick={() => handleButtonClick("bottoms")}
                  >
                    Bottoms
                  </button>
                  <button
                    className={getButtonClass("jeans")}
                    onClick={() => handleButtonClick("jeans")}
                  >
                    Jeans
                  </button>
                  <button
                    className={getButtonClass("sweaters")}
                    onClick={() => handleButtonClick("sweaters")}
                  >
                    Sweaters
                  </button>
                </div>
              </div>
              <div className="row shop-card-border-btm">
                {cardData.map((card) => (
                  <div className="col-lg-4 col-md-6 col-12 mt-5">
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
                  </div>
                ))}
              </div>
              <div className="row mt-5 shop-change-buttons">
                <div className="col-4 text-start">
                  <button className="btn shop-previous-btn">
                    <i class="bi bi-arrow-left"></i>Previous
                  </button>
                </div>
                <div className="col-4 text-center">
                  <button className="btn shop-1-btn">1</button>
                  <button className="btn shop-2-btn">2</button>
                  <button className="btn shop-3-btn">3</button>
                  <button className="btn shop-4-btn">4</button>
                </div>
                <div className="col-4 text-end">
                  <button className="btn shop-next-btn">
                    Next<i class="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MobileApp />
    </>
  );
};

export default ShopMen;
