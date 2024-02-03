import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero-banner">
        <div className="container">
          <div className="hero-banner-main-wrap flex">
            <div className="hero-banner-alpha-wrap">
              <div className="hero-banner-title-wrapper">
                <h2 className="hero-banner-alpha-title">
                  your feet deserve the best
                </h2>
                <p className="hero-banner-alpha-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quia, delectus saepe praesentium fuga obcaecati
                  reprehenderit doloribus. Sunt, error aliquam.
                </p>
              </div>
              <div className="hero-banner-buttons-wrap flex">
                <div className="hero-banner-button-alpha">
                  <span className="hero-banner-btn-alpha">shop now</span>
                </div>
                <div className="hero-banner-button-beta">
                  <span className="hero-banner-btn-beta">category</span>
                </div>
              </div>
              <div className="hero-banner-icons-wrapper">
                <span className="hero-banner-text">also available on</span>
                <div className="hero-banner-icons-wrap flex">
                  <div className="hero-banner-icon-image">
                    <img src="./images/brand-page/flipkart.png" />
                  </div>
                  <div className="hero-banner-icon-image">
                    <img src="./images/brand-page/amazon.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-banner-beta-wrap">
              <img
                src="/images/brand-page/shoe_image.png"
                className="hero-banner-beta-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
