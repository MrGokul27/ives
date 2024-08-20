import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/contact.css";
import MobileApp from "../components/MobileApp";
import contactBanner from "../assets/images/contact/Contact-Banner-Image.webp";
import contactBannerMobile from "../assets/images/contact/Contact-Banner-image-Mobile.png";

const contactData = [
  {
    contIcon: <i className="bi bi-award"></i>,
    contHeading: "13 Years",
    contSubHeading: "Years Of Experience",
  },
  {
    contIcon: <i className="bi bi-hand-thumbs-up"></i>,
    contHeading: "100% Satisfaction",
    contSubHeading: "Guaranteed or your money back",
  },
  {
    contIcon: <i className="bi bi-bag"></i>,
    contHeading: "Free Shipping",
    contSubHeading: "On all orders over $50.",
  },
  {
    contIcon: <i className="bi bi-send"></i>,
    contHeading: "24/7 Support",
    contSubHeading: "We're here to help whenever you need us",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send form data to a server
    console.log(formData);
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      {/* Contact Banner Section */}
      <section className="m-lg-5 p-md-5 lufga" id="section-contact-1">
        <div className="container-fluid">
          {/* Contact Banner Desktop */}
          <div className="row justify-content-center" id="contact-card">
            <div className="col-12 text-center">
              <div className="position-relative">
                <img src={contactBanner} alt="" className="img-fluid w-100" />
                <div className="text-start position-absolute top-50">
                  <span className="d-flex align-items-center">
                    <Link to="/">
                      <i className="bi bi-house"></i>
                    </Link>
                    <i className="bi bi-chevron-right mx-3"></i>
                    <Link to="/contact" className="text-decoration-none">
                      <p className="m-0">Contact us</p>
                    </Link>
                  </span>
                  <h2 className="mt-3">CONTACT US</h2>
                  <p className="mt-3 contact-banner-para">
                    Get in touch with us for any questions or support. We're
                    here to help with your fashion needs and feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Content */}

          {/* Contact Banner Mobile */}
          <div className="card border-0" id="contact-card-mobile">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="text-start p-4">
                  <h2>Contact us</h2>
                  <p>
                    Get in touch with us for any questions or support. We're
                    here to help with your fashion needs and feedback
                  </p>
                </div>
              </div>
              <div className="col-12 text-center">
                <img src={contactBannerMobile} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          {/* End of Content */}
        </div>
      </section>
      {/* End of Section */}

      {/* Get in Touch Section */}
      <section className="m-lg-5 m-3 p-lg-5 p-3 lufga" id="section-contact-2">
        <div className="container-fluid">
          <div className="row justify-content-around">
            <div className="col-xl-4 col-lg-5 col-md-5 col-12">
              <h2>Get In Touch</h2>
              <p className="mt-3">
                Get in touch with us for any inquiries or support. We're here to
                assist you with your fashion needs and ensure a great
                experience.
              </p>
              <div className="">
                <div className="d-flex align-items-start py-4">
                  <i className="bi bi-geo-alt"></i>
                  <div className="ms-4 location-para">
                    <p className="location-head1">Address</p>
                    <p className="location-head2">Get A Location</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-start py-4">
                  <i className="bi bi-telephone"></i>
                  <div className="ms-4 phone-para">
                    <p className="phone-head1">Phone</p>
                    <p className="phone-head2">+91-7867969038</p>
                  </div>
                </div>
                <hr />
                <div className="d-flex align-items-start py-4">
                  <i className="bi bi-envelope"></i>
                  <div className="ms-4 mail-para">
                    <p className="email-head1">Email</p>
                    <p className="email-head2">support@ives.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-7 col-12">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message{" "}
                    <span className="form-mssg">(Maximum 100 Word)</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    <span className="form-mssg">I agree with the</span> Term Of
                    Uses <span className="form-mssg">and</span> Privacy Policy
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn contact-submit-btn w-100 mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End of Section */}

      {/* Experience Information Section */}
      <section className="m-lg-5 m-3 p-lg-5 p-3 lufga" id="section-contact-3">
        <div className="container-fluid">
          <div className="row">
            {contactData.map((contactCard) => (
              <>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card border-0 px-4 py-5 mt-3">
                    <span>{contactCard.contIcon}</span>
                    <h2 className="mt-5">{contactCard.contHeading}</h2>
                    <p className="mt-3">{contactCard.contSubHeading}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      {/* End of Section */}

      <MobileApp />
    </>
  );
};

export default Contact;
