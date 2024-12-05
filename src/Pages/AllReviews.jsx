import React from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  const reviews = useLoaderData();
  console.log(reviews);


  return (
    <div>
      <h1 className="text-2xl font-semibold"> All Reviews {reviews.length}</h1>
      {reviews.map((review) => (
        <ReviewCard key={reviews._id} reviews={review}></ReviewCard>
      ))}
    </div>
  );
};

export default AllReviews;
