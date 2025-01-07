import React from "react";
import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";
import Slider from "../components/Slider";
import TrendingGenres from "../components/TrendingGenres";

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
        <NavBar />
      </section>

      {/* banner or slider */}
      <section>
        <Slider />
      </section>

      {/* Highest rated card section */}
      <div className="text-center mt-8 pt-6 mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">
          {/* Using Typewriter for animated text */}
          <Typewriter
            words={["Highest Rated Games"]}
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="mt-4 pb-6 text-gray-300">
          Explore the top-rated games based on user reviews!
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="w-10/12 pb-12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topRatedReviews.map((review) => (
            <ReviewCard key={review._id} reviews={review} />
          ))}
        </div>
      </div>
      {/* EXTAR SECTION 1 */}
      <TrendingGenres></TrendingGenres>
      <Faq></Faq>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayouts;
