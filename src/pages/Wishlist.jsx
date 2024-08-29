import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Rate } from "antd";
import MobileApp from "../components/MobileApp";
import "../assets/css/wishlist.css";
import arrival1 from "../assets/images/home/new-arrival-image (1).png";
import arrival2 from "../assets/images/home/new-arrival-image (2).png";
import arrival3 from "../assets/images/home/new-arrival-image (3).png";

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
  {
    id: 10,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 10th card.",
    imageUrl: arrival1,
  },
  {
    id: 11,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 11th card.",
    imageUrl: arrival2,
  },
  {
    id: 12,
    title: "Casual Shirt",
    price: "₹ 1654",
    offerWith: "₹ 999",
    offerWithout: "₹ 1499",
    description: "This is the 12th card.",
    imageUrl: arrival3,
  },
];

const Wishlist = () => {
  /* Heart Icon Fill */
  const [filledHearts, setFilledHearts] = useState({});

  const handleHeartClick = (cardId) => {
    setFilledHearts((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  // *************************

  /* Active Button */
  const [activeButton, setActiveButton] = useState("all");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonClass = (buttonId) => {
    return buttonId === activeButton ? "btn-active" : "btn-inactive";
  };
  // *************************

  return (
    <>
      {/* First Section */}
      <section
        className="mx-lg-5 mt-md-5 px-md-5 pt-md-5 lufga"
        id="section-wishlist-1"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center">
                <Link to="/">
                  <i className="bi bi-house"></i>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <Link to="/wishlist" className="text-decoration-none">
                  <p className="m-0">Favourite</p>
                </Link>
              </span>
            </div>
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
                className={getButtonClass("men")}
                onClick={() => handleButtonClick("men")}
              >
                Men
              </button>
              <button
                className={getButtonClass("women")}
                onClick={() => handleButtonClick("women")}
              >
                Women
              </button>
              <button
                className={getButtonClass("accessories")}
                onClick={() => handleButtonClick("accessories")}
              >
                Accessories
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Card Section */}
      <section className="mx-lg-5 px-md-5 lufga" id="section-wishlist-2">
        <div className="container-fluid">
          <div className="row">
            {cardData.map((card) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
                <div
                  className="wishlist-slider-card border-0 position-relative"
                  key={card.id}
                >
                  <img src={card.imageUrl} alt="" className="img-fluid w-100" />
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
          <div className="row mt-5 wishlist-change-buttons">
            <div className="col-4 text-start">
              <button className="btn wishlist-previous-btn">
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
              <button className="btn wishlist-next-btn">
                Next<i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      <MobileApp />
    </>
  );
};

export default Wishlist;
