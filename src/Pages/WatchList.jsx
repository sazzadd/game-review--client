import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const WatchList = () => {
  const watchListData = useLoaderData();
  const { user } = useContext(AuthContext);

  // Filter the watch list data based on the logged-in user's email
  const filteredData = watchListData.filter(
    (list) => list.email === user?.email
  );

  return (
    <div className="min-h-screen text-white py-8">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-yellow-400">
            Your Watch List
          </h1>
          <p className="mt-2 text-gray-300">
            Explore the games you are planning to dive into!
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
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((list, index) => (
                  <tr
                    key={index}
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
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-gray-500">
                    No data found
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

export default WatchList;
