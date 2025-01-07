import React, { useContext, useEffect, useState } from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state
  const { user, handleLogOut } = useContext(AuthContext);
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Track theme toggle state

  // Function to handle scroll and make navbar sticky
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add your theme switching logic here (e.g., toggle CSS classes)
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const List = (
    <ul className="menu menu-horizontal px-1 space-x-4">
      <li>
        <NavLink
          to="/"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allReviews"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
        >
          All Reviews
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addReview"
              className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
            >
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myReview"
              className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/watchList"
              className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
            >
              Watch List
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <div
      className={`navbar bg-base-100 rounded-xl w-10/12 mx-auto ${
        isSticky
          ? "fixed top-4 z-50 shadow-lg left-1/2 transform -translate-x-1/2"
          : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allReviews"
                className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
              >
                All Reviews
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/addReview"
                    className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
                  >
                    Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myReview"
                    className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
                  >
                    My Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/watchList"
                    className="text-[#fbbd05] hover:text-[#d99d04] font-semibold transition-all duration-300"
                  >
                    Watch List
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <IoLogoGameControllerB className="text-[#fbbd05]" />
          <span>
            <span className="text-gray-800">Chill</span>{" "}
            <span className="text-[#fbbd05]">gamer</span>
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{List}</ul>
      </div>
      <div className="navbar-end flex items-center space-x-3">
        {/* Theme Toggle */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
             value="dark"
          />

          {/* sun icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* User Profile or Login/Register */}
        {user ? (
          <div className="relative ml-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300"
              >
                <div className="w-10 rounded-full border-2 border-yellow-400">
                  <img
                    src={user.photoURL || "https://via.placeholder.com/150"}
                    alt="User Profile"
                  />
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm z-[1000] absolute dropdown-content bg-white rounded-lg mt-3 w-48 p-2 shadow-lg transition-all duration-300"
              >
                <li className="font-semibold">{user.displayName}</li>
                <li className="font-semibold">
                  <button
                    onClick={handleLogOut}
                    className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-x-3 flex">
            <Link
              to="/auth/login"
              className="py-2 px-4 text-sm font-medium text-gray-800 bg-yellow-400 rounded-lg shadow-md border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
