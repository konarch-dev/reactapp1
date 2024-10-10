import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt=""></img>
        <p>Shooper</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt=""></img>
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt=""></img>
        </div>

        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt=""></img>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>&copy; 2021 Shooper. All Rights Reserved | Terms and Conditions</p>
      </div>
    </div>
  );
};
export default Footer;
