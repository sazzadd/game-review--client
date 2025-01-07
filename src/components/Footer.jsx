import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 to-gray-900 text-neutral-content py-4 sm:py-6 flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <IoGameController className="text-3xl text-[#fbbd05] transition-all duration-300 hover:scale-110" />
        <span className="text-lg font-semibold text-white">
          Chill<span className="text-[#d99d04]">gamer</span>
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center space-x-4  text-white text-sm">
        <Link to="/" className="hover:text-[#fbbd05] transition-colors duration-300">
          Home
        </Link>
        <Link to="/allReviews" className="hover:text-[#fbbd05] transition-colors duration-300">
          All Review
        </Link>
        <Link to="/contact" className="hover:text-[#fbbd05] transition-colors duration-300">
          Contact
        </Link>
        <Link to="/privacy" className="hover:text-[#fbbd05] transition-colors duration-300">
          Privacy Policy
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex space-x-4 ">
        <a
          href="https://facebook.com"
          className="text-white hover:text-[#fbbd05] transition-colors duration-300"
          aria-label="Facebook"
        >
          <FaFacebook size={20} />
        </a>
        <a
          href="https://linkedin.com"
          className="text-white hover:text-[#fbbd05] transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://twitter.com"
          className="text-white hover:text-[#fbbd05] transition-colors duration-300"
          aria-label="Twitter"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://youtube.com"
          className="text-white hover:text-[#fbbd05] transition-colors duration-300"
          aria-label="YouTube"
        >
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-white ">
        Copyright © {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
