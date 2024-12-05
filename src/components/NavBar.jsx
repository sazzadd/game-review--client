import React, { useContext, useEffect, useState } from "react";
import { IoGameController } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const { user, handleLogOut } = useContext(AuthContext);

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
      <li>
        <NavLink
          to="/myReview"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold"
        >
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/watchList"
          className="text-[#fbbd05] hover:text-[#d99d04] font-semibold"
        >
          Watch List
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="navbar bg-gray-100 transition-all duration-500 w-11/12 mx-auto">
      <div className="navbar-start flex items-center ">
        {/* Brand Name with Icon */}
        <IoGameController className="text-3xl text-[#fbbd05] mr-2" />
        <a className="btn btn-ghost text-2xl font-bold text-[#fbbd05]">
          Chill Gamer
        </a>
      </div>
      <div className="navbar-center hidden font-bold lg:flex">{List}</div>
      <div className="navbar-end">
        {/* theme change */}
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
        {/* Display User Email */}
        {user && (
          <span className="font-semibold text-gray-700 mr-4">{user.email}</span>
        )}

        {/* User Profile and Authentication Menu */}
        <div className="dropdown dropdown-end relative">
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

          {/* Dropdown Menu */}
          <ul
            tabIndex="0"
            className="menu menu-sm z-[1000] absolute dropdown-content bg-white rounded-lg mt-3 w-48 p-2 shadow-lg"
          >
            {user ? (
              <li className="font-semibold">
                <button
                  onClick={handleLogOut}
                  className="w-full py-2 px-4 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-200"
                >
                  Logout
                </button>
              </li>
            ) : (
              <div className="flex flex-col gap-2">
                <li>
                  <Link
                    className="w-full py-2 px-4 text-sm bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition-all duration-200"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/register"
                    className="w-full py-2 px-4 text-sm bg-gray-700 text-yellow-400 rounded-lg text-center hover:bg-gray-800 transition-all duration-200"
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
