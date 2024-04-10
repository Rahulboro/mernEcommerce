import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src="" alt="" />
        <p>ECOM</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-socialmedia">
        <div className="footer-icon-container">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>
        <div className="footer-copyright">
          <hr />
          <p>copyright @ 2024 - All right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
