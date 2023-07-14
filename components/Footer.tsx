import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import gaFooterLogo from "../assets/gaFooterLogo.svg";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <Image width={160} height={140} src={gaFooterLogo} alt="GeekyAnts Footer Logo" />
        </div>

        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About Us</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
        </div>
        <div className="footer-section-columns">
          <span>91-99999-99999</span>
          <span>1@geekyants.com</span>
          <span>2@geekyants.com</span>
          <span>3@geekyants.com</span>
        </div>
        <div className="footer-section-columns">
          <span>T&C</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
