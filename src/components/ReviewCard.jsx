import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaGamepad, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = ({ reviews }) => {
  const { gameCover, gameTitle, genre, rating, _id } = reviews;

  return (
    <div className="max-w-sm bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
      {/* Cover Image */}
      <img
        src={gameCover}
        alt={`Cover of ${gameTitle}`}
        className="w-full h-52 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <FaGamepad className="text-[#fbbd05]" /> {gameTitle}
        </h2>

        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <BiCategory className="text-yellow-500" /> Genre: {genre}
        </p>
        <p className="text-sm text-gray-600 mt-2 flex items-center gap-2">
          <FaStar className="text-yellow-500" /> Rating: {rating} / 10
        </p>

        {/* Explore Details Button */}
        <Link
          to={`/ReviewDetail/${_id}`}
          className="mt-5 inline-block w-full py-3 px-5 bg-yellow-300 text-gray-800 font-medium rounded-lg text-center hover:bg-yellow-400 transition-all duration-200"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
