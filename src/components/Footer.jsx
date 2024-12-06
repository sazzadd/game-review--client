import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-gradient-to-r from-gray-800 to-gray-900 text-neutral-content p-4 flex flex-col items-center">
        <aside className="grid-flow-col items-center mb-4">
          <IoGameController className="text-3xl hidden md:block text-[#fbbd05] mr-2 transition-all duration-300 hover:scale-110" />

          <p className="text-white font-bold text-sm mt-2">
            Copyright © {new Date().getFullYear()} - All Rights Reserved
          </p>
        </aside>

        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end flex items-center justify-center space-x-4">
          <a
            href="https://twitter.com"
            className="text-white hover:text-[#fbbd05] transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            className="text-white hover:text-[#fbbd05] transition-colors duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://youtube.com"
            className="text-white hover:text-[#fbbd05] transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
