import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileApp from "../components/MobileApp";
import "../assets/css/cart.css";
import cartImage1 from "../assets/images/cart/Frame 33.png";
import cartImage2 from "../assets/images/cart/Frame 33 (1).png";
import cartImage3 from "../assets/images/cart/Frame 33 (2).png";

const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      image: cartImage1,
      name: "Gradient Graphic T-shirt",
      size: "XL",
      color: "Black",
      price: "₹ 1,450",
      quantity: 2,
    },
    {
      id: 2,
      image: cartImage2,
      name: "Shirt",
      size: "XL",
      color: "Red",
      price: "₹ 1,450",
      quantity: 1,
    },

    {
      id: 3,
      image: cartImage3,
      name: "Skinny Jean",
      size: "XL",
      color: "Blue",
      price: "₹ 1,450",
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <section className="m-lg-5 p-md-5 lufga" id="section-cart-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center">
                <Link to="/">
                  <i className="bi bi-house"></i>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <Link to="/contact" className="text-decoration-none">
                  <p className="m-0">Checkout</p>
                </Link>
              </span>
            </div>
          </div>
          <div className="row mt-5" id="cart-card-items">
            <div className="col-md-8">
              <div className="card px-4 py-3">
                {cartItems.map((cartCard) => (
                  <div
                    key={cartCard.id}
                    className="row align-items-center"
                    id="card-items-border-btm"
                  >
                    <div className="col-md-2 col-4">
                      <img src={cartCard.image} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-10 col-12">
                      <div className="d-flex justify-content-between mt-md-0 mt-4">
                        <h2>{cartCard.name}</h2>
                        <i className="bi bi-trash"></i>
                      </div>
                      <div className="d-flex mt-3">
                        <h3>
                          Size: <span>{cartCard.size}</span>
                        </h3>
                        <h3 className="ms-5">
                          Colour: <span>{cartCard.color}</span>
                        </h3>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h4 className="mb-0 mt-2">{cartCard.price}</h4>
                        <div className="d-flex count-items-bg align-items-center">
                          <i
                            className="bi bi-dash"
                            onClick={() =>
                              handleQuantityChange(cartCard.id, -1)
                            }
                          ></i>
                          <p className="cart-count-items mb-0 mx-3">
                            {cartCard.quantity}
                          </p>
                          <i
                            className="bi bi-plus"
                            onClick={() => handleQuantityChange(cartCard.id, 1)}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card mt-5 text-center card-discount">
                <p className="mb-0">
                  <span className="me-3">% </span>10% Instant Discount with
                  Federal Bank Debit Cards on a min spend of ₹15000. TCA
                </p>
              </div>
            </div>
            <div className="col-md-4" id="summary-details">
              <div className="card px-4 py-3">
                <div className="" id="card-items-border-btm">
                  <h2>Order Summary</h2>
                  <div className="d-flex justify-content-between mt-3">
                    <h3>Subtotal</h3>
                    <h4>₹4500</h4>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <h3>Discount (-20%)</h3>
                    <h4>
                      <span>-₹113</span>
                    </h4>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <h3>Delivery Fee</h3>
                    <h4>₹100</h4>
                  </div>
                </div>
                <div className="coupen-code" id="card-items-border-btm">
                  <h2>Use Code</h2>
                  <div className="d-lg-flex d-block justify-content-between mt-3">
                    <input
                      className="form-control mr-sm-2 search-input me-3"
                      type="search"
                      placeholder="Add promo code"
                      aria-label="Search"
                    />
                    <button
                      type="button"
                      className="apply-btn border-0 mt-md-0 mt-3"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <div className="coupen-code mt-3">
                  <div className="d-flex justify-content-between mt-3">
                    <h2>Total</h2>
                    <h4>₹3500</h4>
                  </div>
                  <Link to="/checkout">
                  <button className="btn cart-checkout-btn w-100 mt-3">
                    Go to Checkout <i className="bi bi-arrow-right"></i>
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
            <Link to="/checkout">Proceed to Checkout</Link>
          </div>
        )}
      </div> */}
      <MobileApp />
    </>
  );
};

export default Cart;
