import React, { useContext, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const [menuOpen, setMenuOpen] = useState(false); // Track mobile menu state
  const { user, handleLogOut } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setLoading(false); // Set loading to false once user data is loaded
    }
  }, [user]);

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
    </ul>
  );

  return (
    <div className="navbar bg-gray-100 transition-all duration-500 w-11/12 mx-auto rounded-lg shadow-lg">
      <div className="navbar-start flex items-center justify-between w-full">
        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
            className="text-2xl text-[#fbbd05] hover:text-[#d99d04] transition-all duration-300"
          >
            <HiMenu />
          </button>
        </div>
        {/* Brand Name with Icon */}
        <div className="flex items-center">
          <IoGameController className="text-3xl hidden md:block text-[#fbbd05] mr-2 transition-all duration-300 hover:scale-110" />
          <a className="btn hidden md:block lg:block btn-ghost text-2xl font-bold text-[#fbbd05] hover:text-[#d99d04] transition-all duration-300">
            Chill Gamer
          </a>
        </div>
      </div>

      {/* Centered Navigation Links for Desktop (Hidden on Mobile) */}
      <div className="navbar-center hidden lg:flex">{List}</div>

      {/* Mobile Menu (Appears only when mobile menu is open) */}
      <div
        className={`lg:hidden w-full bg-gray-100 p-4 rounded-lg shadow-lg mt-4 ${
          menuOpen ? "" : "hidden"
        }`}
      >
        {List}
      </div>

      <div className="navbar-end flex items-center space-x-4">
        {/* Theme Change */}
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {/* User Profile and Authentication Menu */}
        <div className="dropdown dropdown-end relative">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300"
          >
            <div className="w-10 rounded-full border-2 border-yellow-400">
              {loading ? (
                <img
                  alt="Default Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              ) : user && user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" />
              ) : (
                <img
                  alt="Default Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              )}
            </div>
          </div>

          {/* Profile Tooltip */}
          {user && user.displayName && (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName}
            ></div>
          )}

          {/* Dropdown Menu */}
          <ul
            tabIndex="0"
            className="menu menu-sm z-[1000] absolute dropdown-content bg-white rounded-lg mt-3 w-48 p-2 shadow-lg transition-all duration-300"
          >
            {user ? (
              <>
                <li className="font-semibold">{user.displayName}</li>
                <li className="font-semibold">
                  <button
                    onClick={handleLogOut}
                    className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <div className="flex flex-col gap-2">
                <li>
                  <Link
                    className="w-full py-3 px-5 text-base font-semibold text-white rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 hover:bg-indigo-700 transition-all duration-300"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="w-full py-3 px-5 text-base font-semibold text-yellow-400 rounded-md bg-gradient-to-r from-green-500 to-teal-500 hover:bg-green-600 transition-all duration-300"
                  >
                    Register
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
