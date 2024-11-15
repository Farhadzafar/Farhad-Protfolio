import { useState, useRef } from "react";
import { certificateCard } from "../constants";

export default function Certificate() {
  const [showAll, setShowAll] = useState(false);
  const topRef = useRef(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Achievements</h2>
        <p className="text-gray-600 mt-2">
          We are proud of our accomplishments and the milestones we ve reached.
          Here are some of the certificates that highlight our journey and
          success.
        </p>
      </div>
      <div
        ref={topRef}
        className={`w-full grid gap-6 ${
          showAll
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2 lg:grid-cols-3"
        } justify-center`}
      >
        {certificateCard
          .slice(0, showAll ? certificateCard.length : 3)
          .map((data, i) => (
            <div
              className="py-6 transform transition duration-300 hover:scale-105"
              key={i}
            >
              <div className="w-[80%] mx-auto h-[10rem] rounded-md overflow-hidden shadow-lg border-2 border-blue-500">
                <img
                  className="w-full h-full object-cover"
                  src={data.image}
                  alt={`certificate of ${data.title}`}
                />
              </div>
              <p className="mt-4 text-center text-lg font-semibold text-gray-700">
                {data.title}
              </p>
              <small className="block text-center text-gray-500">
                {data.year}
              </small>
            </div>
          ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={toggleShowAll}
          className="px-6 py-2 text-white bg-color-3 rounded-md hover:bg-color-3/75 transition duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
