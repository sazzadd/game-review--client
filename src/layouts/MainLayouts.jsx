import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";
import Slider from "../components/Slider";

const MainLayouts = () => {
  const reviews = useLoaderData();

  // Sort the reviews by rating in descending order and get the top 6
  const topRatedReviews = reviews
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <div>
      {/* nav */}
      <section>
        <NavBar></NavBar>
      </section>

      {/* banner or slider */}
      <section>
        <Slider></Slider>
      </section>

      {/* Highest rated card section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">
          Highest Rated Games
        </h2>
        <p className="mt-2 text-gray-300">
          Explore the top-rated games based on user reviews!
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRatedReviews.map((review) => (
            <ReviewCard key={review._id} reviews={review} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
