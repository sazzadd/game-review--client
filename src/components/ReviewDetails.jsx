import React, { useContext, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaStar, FaUser } from "react-icons/fa";
import { GiLaurels } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  // Loader data
  const review = useLoaderData();
  const [loading, setLoading] = useState(false);

  if (!review) {
    return <div className="text-center text-gray-500">Review not found</div>;
  }

  const email = user.email;
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

  // Handle Add to WatchList
  const handleAddToWatchList = () => {
    if (loading) return;
    setLoading(true);

    const watchList = {
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      email,
      userName,
    };

    fetch("https://game-reviw-site.vercel.app/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review added to WatchList",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "There was an issue adding to the WatchList.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 md:flex md:flex-row md:space-x-8 border border-gray-300">
        <div className="w-full md:w-1/3 border border-gray-300 rounded-lg shadow-md">
          <img
            src={gameCover}
            alt={gameTitle}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-2/3 border border-gray-300 rounded-lg p-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            {gameTitle}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Published: {publishingYear}
          </p>
          <div className="border-t my-3 border-gray-300"></div>
          <p className="text-gray-600 text-lg font-medium mb-4 flex items-center gap-2">
            <GiLaurels className="text-[#fbbd05]" />
            Genre: {genre}
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {reviewDescription}
          </p>
          <div className="border-t my-4 border-gray-300"></div>

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

          <div className="flex gap-6 mt-4">
            <button
              onClick={handleAddToWatchList}
              disabled={loading}
              className="px-6 py-2 text-white bg-[#fbbd05] rounded-md hover:bg-yellow-400 transition-all duration-300"
            >
              {loading ? "Adding..." : "Add to WatchList"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
