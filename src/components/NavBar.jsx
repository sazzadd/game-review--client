import React, { useContext, useEffect, useState } from "react";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state
  const { user, handleLogOut } = useContext(AuthContext);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  // Simulating async user data fetching for the example (you can remove it if not needed)
  useEffect(() => {
    if (user) {
      setLoading(false); // Set loading to false once user data is loaded
    }
  }, [user]);

  const List = (
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink
          to="/"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allReviews"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold"
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addReview"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold"
        >
          Add Review
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div
      className={`navbar ${
        isDarkTheme ? "bg-gray-900 w-11/12 mx-auto" : "bg-gray-100"
      } transition-all duration-500 w-11/12 mx-auto `}
    >
      <div className="navbar-start flex items-center ">
        {/* Brand Name with Icon */}
        <IoGameController className="text-3xl text-[#fbbd05] mr-2" />
        <a className="btn btn-ghost text-2xl font-bold text-[#fbbd05]">
          Chill Gamer
        </a>

        {/* Toggle Button */}
        <button
          className="btn btn-sm ml-3 flex items-center justify-center gap-2 bg-gray-700 text-white hover:bg-gray-600"
          onClick={toggleTheme}
        >
          {isDarkTheme ? (
            <>
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
                  d="M12 3v2m0 14v2m9-9h2m-18 0H3m16.95-6.364l-1.414-1.414M6.464 17.536l-1.414 1.414M17.536 6.464l1.414-1.414M6.464 6.464l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
                />
              </svg>
              Light
            </>
          ) : (
            <>
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
                  d="M12 3a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
              Dark
            </>
          )}
        </button>
      </div>
      <div className="navbar-center hidden font-bold lg:flex">{List}</div>
      <div className="navbar-end">
        <span className="font-semibold">{user ? user.email : null}</span>

        <Link
          to="/auth/register"
          className="btn btn-sm bg-[#333] text-[#fbbd05] hover:bg-[#444]"
        >
          Register
        </Link>

        {/* user profile pic */}
        <div className="dropdown dropdown-end relative ">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
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
          <ul
            tabIndex="0"
            className="menu menu-sm z-[1000] absolute dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold">
              {user ? (
                <button onClick={handleLogOut}>Logout</button>
              ) : (
                <Link className="btn" to="/auth/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
