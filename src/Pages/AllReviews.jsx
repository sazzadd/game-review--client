import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const reviews = useLoaderData();

  return (
    <div
      className="relative px-4 py-8 mx-auto  min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ytimg.com/vi/KV4alrgL6PQ/maxresdefault.jpg')`,
        backgroundAttachment: "fixed", // Background stays fixed
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-11/12">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-400 tracking-widest">
          All Game Reviews ({reviews.length})
          <div className="h-1 w-32 bg-yellow-400 mx-auto mt-2"></div>
        </h1>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review._id} reviews={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
