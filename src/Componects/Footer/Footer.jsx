import React from "react";
import "./Footer.css";
import instagram from "../assets/socialmediaicons/instagram.png";
import twitter from "../assets/socialmediaicons/twitter.png";
import meta from "../assets/socialmediaicons/meta.png";
import youtube from "../assets/socialmediaicons/youtube.png";
import logo from "../assets/icons/logomain.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img style={{ width: "60px" }} src={logo} alt="" />
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
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={twitter} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={meta} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={youtube} alt="" />
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
