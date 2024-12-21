const TrendingGenres = () => {
  const genres = [
    {
      name: "Action",
      description:
        "Thrilling games packed with intense action and epic adventures.",
      image:
        "https://i.ibb.co.com/xjSjWY5/images.jpg",
    },
    {
      name: "RPG",
      description:
        "Dive into immersive worlds and character-driven storytelling.",
      image:
        "https://i.ibb.co.com/x3Dmbkw/hq720.jpg",
    },
    {
      name: "Simulation",
      description: "Experience realistic gameplay with simulation-style games.",
      image:
        "https://i.ibb.co.com/L5dckvC/images-1.jpg",
    },
    {
      name: "Adventure",
      description:
        "Play your favorite Adventure with realistic mechanics and visuals.",
      image:
        "https://i.ibb.co.com/XzVCQ5S/images-2.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">
          Trending Game Genres
        </h2>
        <p className="mb-12 text-gray-300">
          Discover the most popular genres and explore reviews tailored to your
          gaming style.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  {genre.name}
                </h3>
                <p className="text-gray-300">{genre.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingGenres;
