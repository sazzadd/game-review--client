import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateReview = () => {
  const { _id } = useParams();
  const review = useLoaderData();
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const genres = ["Action", "RPG", "Adventure", "Puzzle", "Horror"]; //
  const handleUpdateReview = (e) => {
    e.preventDefault();
    const form = e.target;

    const userEmail = user?.email || "Guest";
    const userName = user?.displayName || "Anonymous";

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const updatedReview = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail,
      userName,
    };

    fetch(`https://game-reviw-site.vercel.app/review/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "Review Upadted successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div
      className="bg-cover bg-center backdrop-blur-md min-h-screen p-8"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/y69W7K3/167337674-neon-game-controller-or-joystick-for-game-console-on-blue-background.jpg')",
      }}
    >
      <div className="bg-opacity-60 bg-black p-8 rounded-md max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-400 tracking-widest">
          {review.gameTitle} UpDate Game Reviews
          <div className="h-1 w-32 bg-yellow-400 mx-auto mt-2"></div>
        </h1>
        <form onSubmit={handleUpdateReview}>
          {/* Game Cover Image/Thumbnail */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                Game Cover Image (URL)
              </span>
            </label>
            <input
              type="url"
              name="gameCover"
              defaultValue={review.gameCover}
              placeholder="https://example.com/image.jpg"
              className="input input-bordered"
              required
            />
          </div>

          {/* Game Title */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                Game Title
              </span>
            </label>
            <input
              type="text"
              name="gameTitle"
              placeholder="Enter game title"
              className="input input-bordered"
              defaultValue={review.gameTitle}
              required
            />
          </div>

          {/* Review Description */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                Review Description
              </span>
            </label>
            <textarea
              name="reviewDescription"
              placeholder="Write your review here..."
              className="textarea textarea-bordered"
              rows="5"
              defaultValue={review.reviewDescription}
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                Rating (1-10)
              </span>
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Enter a rating (e.g., 8)"
              className="input input-bordered"
              min="1"
              max="10"
              defaultValue={review.rating}
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                Publishing Year
              </span>
            </label>
            <input
              type="number"
              name="publishingYear"
              defaultValue={review.publishingYear}
              placeholder="E.g., 2023"
              className="input input-bordered"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>

          {/* Genres Dropdown */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">Genre</span>
            </label>
            <select name="genre" className="select select-bordered" required>
              <option value="">Select Genre</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* User Email (Read Only) */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">
                User Email
              </span>
            </label>
            <input
              type="email"
              name="userEmail"
              value={user?.email || ""}
              className="input input-bordered  text-red-400"
              readOnly
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-white">User Name</span>
            </label>
            <input
              type="text"
              name="userName"
              value={user?.displayName || "Anonymous"}
              className="input input-bordered text-red-400"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Submit Review"
            className="btn w-full bg-[#fbbd05] text-white mt-6 hover:bg-yellow-500 transition-colors duration-300"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
