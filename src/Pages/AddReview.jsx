import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AddReview = () => {
  const [startDate, setStartDate] = useState(new Date());
  const genres = ["Action", "RPG", "Adventure", "Puzzle", "Horror"]; // Genre options

  // `user` কে `AuthContext` থেকে নিয়ে আসা
  const { user } = useContext(AuthContext);

  const handleAddReview = (e) => {
    e.preventDefault();
    const form = e.target;

    // ইউজারের তথ্য সংগ্রহ করা (যদি ইউজার লগ ইন থাকে)
    const userEmail = user?.email || "Guest"; // যদি `user` না থাকে, তাহলে 'Guest' ডিফল্ট
    const userName = user?.displayName || "Anonymous"; // একইভাবে নামও চেক করা

    const gameCover = form.gameCover.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const newReview = {
      gameCover,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail,
      userName,
    };
    console.log(
      "Submitted Review Data:",
      // gameCover,
      // gameTitle,
      // reviewDescription,
      // rating,
      // publishingYear,
      // genre,
      // userEmail,
      // userName
      newReview
    );
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Review addeed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
    // Add functionality to save or send the review data
  };

  return (
    <div
      className="bg-cover bg-center backdrop-blur-md min-h-screen p-8"
      style={{
        backgroundImage:
          "url('https://assets.rockpapershotgun.com/images/2020/02/Vanquish-Best-Action-Games-2020.jpg')",
      }}
    >
      <div className="bg-opacity-60 bg-black p-8 rounded-md max-w-3xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-white mb-8">
          Add Game Review
        </h2>
        <form onSubmit={handleAddReview}>
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
              className="input input-bordered"
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
              className="input input-bordered"
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

export default AddReview;
