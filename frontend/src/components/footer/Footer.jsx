import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="topSection">
          <div className="brandInfo">
            <h2 className="logo">Streamify</h2>
            <p className="tagline">
              Experience the future of entertainment at your fingertips. Enjoy seamless access to movies, shows, and more!
            </p>
          </div>
          <div className="newsletter">
            <h3>Subscribe to our Newsletter</h3>
            <form className="newsletterForm">
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>

        <div className="socialIcons">
          <a className="icon" href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a className="icon" href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a className="icon" href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a className="icon" href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Streamify. All rights reserved.
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
