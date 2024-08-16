import React from "react";
import "../assets/css/mobileApp.css";
import mobileAppComponent from "../assets/images/MobileApp/Mobile-app-component-image.webp";
import googlePay from "../assets/images/MobileApp/googleplay.webp";
import applePay from "../assets/images/MobileApp/appstore.webp";

const MobileApp = () => {
  return (
    <section className="p-md-5 p-3 my-md-5 my-3 lufga" id="section-Mobile-app">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-12">
            <div className="card">
              <div className="row align-items-center">
                <div className="col-md-6 p-5">
                  <h2>Explore Our Mobile App for Fashion Enthusiasts.</h2>
                  <p>
                    Check out our mobile app for fashion enthusiasts! Explore
                    the latest trends, shop conveniently, and stay updated with
                    Ive's Clothing.
                  </p>
                  <div className="row mt-4 me-md-5">
                    <div className="col-6">
                      <img src={googlePay} alt="" className="img-fluid" />
                    </div>
                    <div className="col-6">
                      <img src={applePay} alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center pt-5 pe-5">
                  <img src={mobileAppComponent} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
