import { useContext, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // For sweet alert
import { AuthContext } from "../Provider/AuthProvider";
import NavBar from "../components/NavBar";

const MyReviews = () => {
  const reviews = useLoaderData(); // Fetch reviews data
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Filter reviews by the logged-in user's email
  const [filteredData, setFilteredData] = useState(
    reviews.filter((list) => list.userEmail === user?.email)
  );

  // Handle the delete operation
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-reviw-site.vercel.app/review/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");

              // Update the filtered data state
              const remaining = filteredData.filter(
                (review) => review._id !== _id
              );
              setFilteredData(remaining);
            }
          })
          .catch((error) => console.error("Error deleting review:", error));
      }
    });
  };

  // Handle the update operation
  const handleUpdate = (id) => {
    navigate(`/updateReview/${id}`); // Redirect to the Update Review page
  };

  return (
    <div className="min-h-screen text-white pb-8">
      <NavBar></NavBar>
      <div className="container mx-auto py-4 px-4">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-yellow-400">Your Reviews</h1>
          <p className="mt-2 text-gray-300">
            Explore the games you have reviewed!
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-gray-800 shadow-lg rounded-lg">
          <table className="table w-full">
            {/* Table Header */}
            <thead className="bg-yellow-500 text-black">
              <tr>
                <th>#</th>
                <th>Game Title</th>
                <th>Genre</th>
                <th>Publishing Year</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((list, index) => (
                  <tr
                    key={list._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"
                    } hover:bg-gray-500 transition-all`}
                  >
                    <td className="text-yellow-400 font-bold">{index + 1}</td>
                    <td className="font-semibold text-white">
                      {list.gameTitle}
                    </td>
                    <td className="text-gray-300">{list.genre}</td>
                    <td className="text-gray-300">{list.publishingYear}</td>
                    <td className="text-yellow-400 font-bold">{list.rating}</td>

                    <td className="flex items-center justify-center gap-2">
                      <Link to={`/updateReview/${list._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-all">
                          <FaEdit /> Update
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(list._id)}
                        className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md flex items-center gap-1 transition-all"
                      >
                        <FaTrashAlt /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500">
                    No reviews found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
