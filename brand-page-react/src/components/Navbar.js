import React from "react";

const Navbar = () => {
  return (
    <div className="home">
      <div className="container">
      <nav className="navbar-main flex">
        <div className="navbar-image-wrap">
          <img className="navbar-image" src="/images/brand-page/brand_logo.png" />
        </div>
        <div className="navbar-link-items-wrap">
          <ul className="navbar-link-items flex">
            <li className="navbar-links">
              <a className="navbar-item">home</a>
            </li>
            <li className="navbar-links">
              <a className="navbar-item">about us</a>
            </li>
            <li className="navbar-links">
              <a className="navbar-item">gallery</a>
            </li>
            <li className="navbar-links">
              <a className="navbar-item">contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-btn-wrap">
          <button className="navbar-btn">login</button>
        </div>
      </nav>
    </div>
    </div>
  );
};
export default Navbar;
