import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaGamepad, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = ({ reviews }) => {
  const { gameCover, gameTitle, genre, rating, _id } = reviews;

  return (
    <div className="max-w-xs sm:max-w-sm lg:max-w-md bg-black bg-opacity-50  rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 overflow-hidden">
      {/* Cover Image with Overlay */}
      <div className="relative">
        <img
          src={gameCover}
          alt={`Cover of ${gameTitle}`}
          className="w-full h-56 sm:h-64 lg:h-72 object-cover rounded-t-xl filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 bg-gradient-to-b from-[#111] via-[#333] to-[#555] rounded-b-xl text-white">
        <h2 className="text-xl font-bold flex items-center gap-2 text-yellow-400">
          <FaGamepad /> {gameTitle}
        </h2>

        <p className="text-sm mt-2 flex items-center gap-2 text-gray-300">
          <BiCategory className="text-yellow-500" /> Genre: {genre}
        </p>
        <p className="text-sm mt-2 flex items-center gap-2 text-gray-300">
          <FaStar className="text-yellow-500" /> Rating: {rating} / 10
        </p>

        {/* Explore Details Button */}
        <Link
          to={`/ReviewDetail/${_id}`}
          className="mt-4 inline-block py-3 px-5 bg-yellow-500 text-gray-900 font-medium rounded-lg text-center w-full hover:bg-yellow-400 transition-all duration-200"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
