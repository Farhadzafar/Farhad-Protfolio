import { useState } from "react";
import { farhad, farhad1, farhad3 } from "../../assets";

const testimonials = [
  {
    id: 1,
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
    img: farhad,
  },
  {
    id: 2,
    name: "John Doe",
    text: "Excellent service, highly recommend! Very professional and easy to work with.",
    rating: 5,
    img: farhad1,
  },
  {
    id: 3,
    name: "Anna Smith",
    text: "The team was very responsive and accommodating. Great experience!",
    rating: 4,
    img: farhad3,
  },
  {
    id: 4,
    name: "James Wilson",
    text: "Amazing attention to detail, and the support team was top-notch!",
    rating: 4,
    img: farhad1,
  },
  {
    id: 5,
    name: "Emily Johnson",
    text: "They truly care about their clients and their satisfaction.",
    rating: 5,
    img: farhad,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto text-center py-12 px-4">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        What Clients Say
      </h2>
      <div className="relative bg-white text-gray-800 shadow-lg rounded-lg py-10 px-8 border-2">
        <div className="flex justify-between items-center mb-4">
          <img
            src={
              testimonials[
                (currentIndex - 1 + testimonials.length) % testimonials.length
              ].img
            }
            alt="Previous client"
            className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-md hidden sm:block"
          />
          <img
            src={testimonials[(currentIndex + 1) % testimonials.length].img}
            alt="Next client"
            className="w-14 h-14 rounded-full border-2 border-gray-300 shadow-md hidden sm:block"
          />
        </div>
        <img
          src={testimonials[currentIndex].img}
          alt={testimonials[currentIndex].name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-xl -mt-12"
        />
        <h3 className="mt-6 text-2xl font-semibold">
          {testimonials[currentIndex].name}
        </h3>
        <p className="mt-4 text-gray-600">{testimonials[currentIndex].text}</p>
        <div className="flex justify-center mt-4">
          {Array(testimonials[currentIndex].rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-500 text-xl">
                ★
              </span>
            ))}
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex justify-center space-x-8 mt-8">
          <button
            onClick={prevTestimonial}
            className="text-gray-800 bg-white border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition duration-200"
          >
            &lt;
          </button>
          <button
            onClick={nextTestimonial}
            className="text-gray-800 bg-white border border-gray-300 rounded-full p-3 w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition duration-200"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
