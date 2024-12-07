import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";

const AllReviews = () => {
  // Getting the initial reviews from loader data
  const reviewsFromLoader = useLoaderData();
  const [reviews, setReviews] = useState(reviewsFromLoader);
  const [sort, setSort] = useState("rating_asc");
  const [genre, setGenre] = useState("");
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  // Function to handle sort and filter changes
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  // Function to apply sorting
  const sortReviews = (reviews) => {
    let sortedReviews = [...reviews];

    if (sort === "rating_asc") {
      sortedReviews.sort((a, b) => a.rating - b.rating);
    } else if (sort === "rating_desc") {
      sortedReviews.sort((a, b) => b.rating - a.rating);
    } else if (sort === "year_asc") {
      sortedReviews.sort((a, b) => a.year - b.year);
    } else if (sort === "year_desc") {
      sortedReviews.sort((a, b) => b.year - a.year);
    }

    return sortedReviews;
  };

  // Fetch reviews with sorting and filtering
  const fetchReviews = async () => {
    const response = await fetch(`/review?genre=${genre}`);
    const data = await response.json();

    // Apply sorting after fetching the reviews
    const sortedData = sortReviews(data);
    setReviews(sortedData);
  };

  // Filter reviews based on genre selection
  const filterReviews = () => {
    let filteredData = reviews;

    if (genre) {
      filteredData = reviews.filter((review) => review.genre === genre);
    }

    return sortReviews(filteredData); // Apply sorting after filtering
  };

  // Fetch reviews whenever sort or genre changes
  useEffect(() => {
    fetchReviews(); // Fetch reviews based on the selected genre
  }, [genre]);

  // Reapply filtering and sorting logic after reviews are fetched or updated
  useEffect(() => {
    const filteredSortedReviews = filterReviews();
    setFilteredReviews(filteredSortedReviews);
  }, [reviews, genre, sort]);

  return (
    <div
      className="relative px-4 py-8 mx-auto min-h-screen bg-cover bg-center"
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
          All Game Reviews ({filteredReviews.length})
          <div className="h-1 w-32 bg-yellow-400 mx-auto mt-2"></div>
        </h1>

        {/* Filter and Sort Controls */}
        <div className="mb-6 text-center">
          <select
            onChange={handleSortChange}
            value={sort}
            className="bg-gray-800 text-white py-2 px-4 rounded"
          >
            <option value="rating_asc">Rating: Low to High</option>
            <option value="rating_desc">Rating: High to Low</option>
            <option value="year_asc">Year: Oldest to Newest</option>
            <option value="year_desc">Year: Newest to Oldest</option>
          </select>

          <select
            onChange={handleGenreChange}
            value={genre}
            className="bg-gray-800 text-white py-2 px-4 ml-4 rounded"
          >
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            {/* Add more genres as needed */}
          </select>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review._id} reviews={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
