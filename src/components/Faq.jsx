import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I submit a game review?",
      answer:
        "To submit a game review, you need to log in first. Once logged in, go to the 'Add Review' page, fill in the details for the game, and click 'Submit'. Your review will be added to the database.",
    },
    {
      question: "Can I edit or delete my reviews?",
      answer:
        "Yes! After submitting a review, you can edit or delete it from the 'My Reviews' page. Simply click 'Update' or 'Delete' next to the review you want to modify.",
    },
    {
      question: "How do I add a game to my watchlist?",
      answer:
        "While viewing a review, you can add a game to your watchlist by clicking the 'Add to Watchlist' button on the review details page.",
    },
    {
      question: "Is it possible to sort reviews?",
      answer:
        "Yes! On the 'All Reviews' page, you can sort the reviews by rating or year. You can also filter reviews by genre.",
    },
    {
      question: "How do I log out?",
      answer:
        "To log out, simply click on the user avatar in the navbar and select 'Log Out'. This will log you out and redirect you to the homepage.",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url('https://e0.pxfuel.com/wallpapers/71/397/desktop-wallpaper-halo-wars-2-2017-games-concept-art-halo-reach-background-halo-fan-art.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-white">
        <h2
          className="text-3xl font-semibold text-center mb-8 text-yellow-400"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="accordion-item border border-gray-300 rounded-md shadow-md bg-gray-800"
              data-aos="fade-up"
            >
              <div
                className="accordion-header p-4 flex justify-between items-center cursor-pointer bg-gray-700 rounded-t-md"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span className="text-yellow-400">
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <div
                  className="accordion-body p-4 bg-gray-900 rounded-b-md"
                  data-aos="fade-in"
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
