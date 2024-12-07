import React from "react";

const Sec1 = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/296/166/desktop-wallpaper-god-of-war-2022-%E2%80%A2-for-you-video-games-2022-thumbnail.jpg)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

      {/* Content Section */}
      <div className="relative flex justify-center items-center h-full">
        <div className="max-w-2xl bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-green-600">Metacritic</h1>
          <p className="text-xl mt-4 font-semibold">
            The Gold Standard in Critical Analysis
          </p>

          <div className="mt-6 text-left">
            <h2 className="text-2xl font-semibold mb-4">
              The Metascore Breakdown
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• We collect reviews from the world's top critics.</li>
              <li>• Each review is scored based on its overall quality.</li>
              <li>
                • The summarized weighted average captures the essence of
                critical opinion.
              </li>
            </ul>
          </div>

          <button className="mt-6 btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
