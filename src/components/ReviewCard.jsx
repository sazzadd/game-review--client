import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaGamepad, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = ({ reviews }) => {
  const { gameCover, gameTitle, genre, rating, _id } = reviews;  // এখানে _id পাবেন reviews থেকে

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      {/* Cover Image */}
      <img
        src={gameCover}
        alt={gameTitle}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaGamepad className="text-[#fbbd05]" /> {gameTitle}
        </h2>

        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
          <BiCategory className="text-yellow-400" /> {genre}
        </p>
        <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {rating} / 10
        </p>

        {/* Explore Details Button */}
        <Link
          to={`/ReviewDetail/${_id}`}  // এখানে সঠিক রাউট পাথ দেওয়া হয়েছে
          className="mt-4 w-full py-2 px-4 bg-[#fbbd05] text-white font-semibold rounded-md hover:bg-yellow-400 transition-colors duration-200"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
