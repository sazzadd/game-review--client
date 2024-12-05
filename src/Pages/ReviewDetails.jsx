import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaStar, FaUser } from "react-icons/fa";
import { GiLaurels } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  // Loader data
  const review = useLoaderData();

  // Check if review data exists
  if (!review) {
    return <div className="text-center text-gray-500">Review not found</div>;
  }

  // Destructure review data
  const {
    gameCover,
    gameTitle,
    reviewDescription,
    rating,
    publishingYear,
    genre,
    userEmail,
    userName,
  } = review;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:flex md:flex-row md:space-x-8 border border-gray-300">
        {/* Left Section: Game Cover Image */}
        <div className="w-full md:w-1/3 border border-gray-300 rounded-lg shadow-md">
          <img
            src={gameCover} // Use actual value from review
            alt={gameTitle} // Use dynamic alt text for better accessibility
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>

        {/* Right Section: Review Details */}
        <div className="mt-6 md:mt-0 w-full md:w-2/3 border border-gray-300 rounded-lg p-4">
          {/* Game Title */}
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{gameTitle}</h2>
          <p className="text-gray-500 text-sm mb-4">Published: {publishingYear}</p>
          <div className="border-t my-3 border-gray-300"></div>

          {/* Genre */}
          <p className="text-gray-600 text-lg font-medium mb-4 flex items-center gap-2">
            <GiLaurels className="text-[#fbbd05]" />
            Genre: {genre}
          </p>

          {/* Review Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-6">{reviewDescription}</p>

          <div className="border-t my-4 border-gray-300"></div>

          {/* Additional Information */}
          <div className="text-gray-600 text-sm mb-4">
            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-500" /> Rating: {rating}/10
            </p>
            <p className="flex items-center gap-2">
              <FaUser className="text-[#fbbd05]" /> User: {userName}
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineMail className="text-blue-500" /> Email: {userEmail}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 mt-4">
            <button className="px-6 py-2 text-white bg-[#fbbd05] rounded-md hover:bg-yellow-400 transition-all duration-300">
              Add to WatchList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
