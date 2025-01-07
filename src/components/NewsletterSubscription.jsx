import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for subscribing!");
      setEmail(""); // Clear the input field after submitting
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
    <section className="newsletter-section bg-gray-800 text-white py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-gray-300">
          Get the latest updates on new game releases and reviews delivered straight to your inbox!
        </p>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {message && (
        <div className="mt-4 text-center text-gray-400">
          <p>{message}</p>
        </div>
      )}
    </section>
  );
};

export default NewsletterSubscription;
