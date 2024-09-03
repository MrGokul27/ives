import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileApp from "../components/MobileApp";
import "../assets/css/checkout.css";
import checkoutimage from "../assets/images/checkout/tshirt.png";

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);/* Address pop up */
  const [showModal1, setShowModal1] = useState(false); /* Successfull pop up */
  const [isProceedingToShipping, setIsProceedingToShipping] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Cash On Delivery");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/addresses");
        const data = await response.json();

        setAddresses(data);
        localStorage.setItem("addresses", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  /* Address pop up */
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  /* ******************* */

  /* Successfull pop up */
  const handleShowModal1 = () => setShowModal1(true);
  const handleCloseModal1 = () => setShowModal1(false);
  /* ******************* */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Address saved successfully!");
        handleCloseModal();
        const newAddresses = await response.json();
        setAddresses([...addresses, newAddresses]);
        localStorage.setItem(
          "addresses",
          JSON.stringify([...addresses, newAddresses])
        );
      } else {
        alert("Failed to save address");
      }
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/address/${addressId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        const updatedResponse = await fetch(
          "http://localhost:5000/api/addresses"
        );
        const updatedAddresses = await updatedResponse.json();

        setAddresses(updatedAddresses);
        localStorage.setItem("addresses", JSON.stringify(updatedAddresses));

        alert("Address deleted successfully!");
      } else {
        alert("Failed to delete address");
      }
    } catch (error) {
      console.error("Error deleting address:", error);
      alert("An error occurred while deleting the address. Please try again.");
    }
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <>
      {/* Information & Shipping Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-checkout-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center">
                <Link to="/">
                  <i className="bi bi-house"></i>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <Link to="/checkout" className="text-decoration-none">
                  <p className="m-0">Checkout</p>
                </Link>
                <i className="bi bi-chevron-right mx-3"></i>
                <p className="m-0">
                  {isProceedingToShipping
                    ? "Payment Details"
                    : "Information & Shipping"}
                </p>
              </span>
            </div>
          </div>
          <div className="row justify-content-between info-and-shipping mt-4">
            <div className="col-md-6">
              {!isProceedingToShipping ? (
                // Shipping Address Section
                <div>
                  <h2>Information & Shipping</h2>
                  <h3 className="mt-3">
                    Provide your billing and shipping addresses for prompt,
                    secure delivery, and enjoy fast, reliable shipping with
                    Ive's Clothing, complete with shipment tracking.
                  </h3>
                  <div className="mt-5">
                    <h4>Address :</h4>
                    <div className="shipping-add-border mt-3">
                      {addresses.map((address, index) => (
                        <div
                          className="address-card py-3 my-3"
                          key={address._id}
                        >
                          <div className="d-flex justify-content-between align-items-start">
                            <div>
                              <input
                                type="radio"
                                name="address"
                                id={`address${index}`}
                                defaultChecked={index === 0}
                              />
                              <label
                                className="ms-2"
                                htmlFor={`address${index}`}
                              >
                                <strong className="address-name">
                                  {address.firstName} {address.lastName}
                                </strong>
                              </label>
                              <span className="badge bg-light text-dark ms-2">
                                {address.type || "HOME"}
                              </span>
                            </div>
                            <div className="edit-remove">
                              <Link to="" className="text-decoration-none me-3">
                                Edit
                              </Link>
                              <span>|</span>
                              <Link
                                to=""
                                className="text-decoration-none text-danger ms-3"
                                onClick={() => handleDeleteAddress(address._id)}
                              >
                                Remove
                              </Link>
                            </div>
                          </div>
                          <p className="ms-4 mt-2">
                            {address.address}, {address.city}, {address.state}{" "}
                            {address.postalCode}
                          </p>
                          <p className="ms-4 m-0">
                            <strong>Contact - </strong>
                            {address.phone}
                          </p>
                        </div>
                      ))}
                    </div>
                    <button
                      className="btn mt-5 p-0 checkout-new-add-btn"
                      onClick={handleShowModal}
                    >
                      <i className="bi bi-plus-lg"></i> Add New Address
                    </button>
                  </div>
                </div>
              ) : (
                //  Payment Methods Section
                <>
                  <div className="">
                    <h2>Payment Details</h2>
                    <h3 className="mt-3">
                      Enter your payment details to complete your purchase
                      securely. We accept major credit cards and digital payment
                      options
                    </h3>
                  </div>
                  <div className="payment-form mt-5">
                    <div className="payment-methods">
                      {/* Cash On Delivery Option */}
                      <div
                        className={`payment-method ${
                          selectedMethod === "Cash On Delivery"
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="cod"
                          checked={selectedMethod === "Cash On Delivery"}
                          onChange={() =>
                            handlePaymentMethodChange("Cash On Delivery")
                          }
                        />
                        <label htmlFor="cod">Cash On Delivery</label>
                      </div>
                      {/* End of COD Option */}

                      {/* Card Option */}
                      <div
                        className={`payment-method ${
                          selectedMethod === "Card" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="card"
                          checked={selectedMethod === "Card"}
                          onChange={() => handlePaymentMethodChange("Card")}
                        />
                        <label htmlFor="card">Card</label>
                        {selectedMethod === "Card" && (
                          <div className="card-details payment-card-heading">
                            <div className="edit-link">Edit</div>
                            <h2 className="mt-4">Card Number</h2>
                            <input
                              type="text"
                              placeholder="1234 5678 9101 1121"
                              className="card-input"
                            />
                            <p className="card-error mt-2">
                              Please Enter a valid Card number
                            </p>
                            <div className="expiration-cvv mt-4">
                              <div className="">
                                <h2 className="">Expiration Date</h2>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  className="expiration-input"
                                />
                              </div>
                              <div className="">
                                <h2 className="">CVV</h2>
                                <input
                                  type="text"
                                  placeholder="123"
                                  className="cvv-input"
                                />
                              </div>
                            </div>
                            <div className="save-card mt-4">
                              <input type="checkbox" id="saveCard" />
                              <label htmlFor="saveCard" className="ms-2">
                                Save card details
                              </label>
                            </div>
                            <button
                              className="payment-submit-btn mb-2"
                              onClick={handleShowModal1}
                            >
                              Pay ₹ 3500
                            </button>
                          </div>
                        )}
                      </div>
                      {/* End of Card Option */}

                      {/* UPI Option */}
                      <div
                        className={`payment-method ${
                          selectedMethod === "UPI" ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          id="upi"
                          checked={selectedMethod === "UPI"}
                          onChange={() => handlePaymentMethodChange("UPI")}
                        />
                        <label htmlFor="upi">UPI</label>
                        {selectedMethod === "UPI" && (
                          <div className="upi-details payment-card-heading">
                            <div className="edit-link">Edit</div>
                            <h2 className="mt-4">UPI ID</h2>
                            <input
                              type="text"
                              placeholder="Enter UPI ID"
                              className="upi-input"
                            />
                          </div>
                        )}
                      </div>
                      {/* End of UPI Option */}
                    </div>
                  </div>
                </>
              )}
              <div className="mt-5">
                {!isProceedingToShipping ? (
                  <Link to="/cart" className="back-to-cart">
                    <button
                      className="back-to-cart-btn btn"
                      onClick={() => setIsProceedingToShipping(true)}
                    >
                      <i className="bi bi-chevron-left me-3"></i>Return to Cart
                    </button>
                  </Link>
                ) : (
                  <button
                    className="back-to-cart-btn btn return-shipping"
                    onClick={() => setIsProceedingToShipping(false)} // Updated line
                  >
                    <i className="bi bi-chevron-left me-3"></i>Return to
                    Shipping
                  </button>
                )}
              </div>
            </div>
            <div className="col-md-5">
              {/* Order Summary */}
              <div className="card checkout-order-summary p-3 mt-md-0 mt-5">
                <h2>Order Summary</h2>
                <div className="card p-3 mt-3 card-summary-data">
                  <div className="d-flex align-items-center">
                    <img src={checkoutimage} alt="" className="img-fluid" />
                    <div className="ms-4">
                      <h2>Sweet shirt</h2>
                      <div className="d-flex">
                        <h3>
                          Size :<span> XL</span>
                        </h3>
                        <h3 className="ms-4">
                          Color :<span> Black</span>
                        </h3>
                      </div>
                      <h4>₹1342</h4>
                    </div>
                  </div>
                </div>
                <div className="card p-3 mt-3 mb-4 card-summary-data">
                  <div className="d-flex align-items-center">
                    <img src={checkoutimage} alt="" className="img-fluid" />
                    <div className="ms-4">
                      <h2>Sweet shirt</h2>
                      <div className="d-flex">
                        <h3>
                          Size :<span> XL</span>
                        </h3>
                        <h3 className="ms-4">
                          Color :<span> Black</span>
                        </h3>
                      </div>
                      <h4>₹1342</h4>
                    </div>
                  </div>
                </div>
                <div className="checkout-subtotal p-3">
                  <div className="d-flex justify-content-between">
                    <h2>Subtotal</h2>
                    <h3>₹3500</h3>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <h2>Shipping</h2>
                    <span>Free</span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="d-flex justify-content-between checkout-total">
                    <h2>Total</h2>
                    <h3>₹3500</h3>
                  </div>
                  {!isProceedingToShipping ? (
                    <button
                      className="checkout-procces-shipping-btn btn w-100 mt-3"
                      onClick={() => setIsProceedingToShipping(true)}
                    >
                      <span>Proceed to Payment</span>
                      <i className="bi bi-chevron-right ms-3"></i>
                    </button>
                  ) : (
                    <button
                      className="checkout-procces-shipping-btn btn w-100 mt-3"
                      id="openModalButton"
                      onClick={handleShowModal1}
                    >
                      Place Order <i className="bi bi-chevron-right"></i>
                    </button>
                  )}
                </div>
              </div>
              {/* End of Order Summary */}
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Modal for Adding New Address */}
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={
          showModal
            ? { display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }
            : {}
        }
        onClick={handleCloseModal}
      >
        <div
          className="modal-dialog checkout-modal lufga"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header justify-content-end">
              <button
                type="button"
                className="close-btn btn"
                onClick={handleCloseModal}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <h2>CONTACT INFO</h2>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <h2>ADDRESS</h2>
                <div className="d-flex">
                  <div className="form-group w-50 me-3">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group w-50">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="State"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Street Address"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group w-50 me-3">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="form-group w-50">
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn checkout-save-add-btn w-100"
                >
                  Save Address
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      {/* Modal for Successfull Order */}
      <div
        className={`modal fade ${showModal1 ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={
          showModal1
            ? { display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }
            : {}
        }
        onClick={handleCloseModal1}
      >
        <div
          className="modal-dialog successful-modal lufga"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header justify-content-between">
              <h2 className="m-0">
                <i class="bi bi-check-circle-fill me-2"></i>Successfully
                Purchased The Product
              </h2>
              <button
                type="button"
                className="close-btn btn border-0"
                onClick={handleCloseModal1}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <div className="">
                <img src={checkoutimage} alt="" className="img-fluid w-50" />
              </div>
              <div className="mt-4">
                <h3>Order #123RGR231567Y Confirmed</h3>
                <button className="btn track-order-btn w-100 mt-3">
                  Track Your Order
                </button>
                <Link className="text-decoration-none">
                  <h4 className="mt-4">Generate Receipt</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Modal */}

      <MobileApp />
    </>
  );
};

export default Checkout;
