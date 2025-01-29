import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Sophia Patel",
    role: "Cardiologist",
    feedback:
      "This AI-driven healthcare platform has revolutionized the way I diagnose and treat my patients. The accuracy is truly impressive!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John Carter",
    role: "Patient",
    feedback:
      "I received an accurate diagnosis within minutes. This platform is a game-changer for remote healthcare.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Emily Watson",
    role: "Neurologist",
    feedback:
      "The AI-based MRI scan analysis helped detect early signs of a neurological condition. Highly recommend it!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-4xl font-semibold text-white">
        What Our <span className="text-orange-500">Users Say</span>
      </h2>
      <div className="relative bg-gray-900 p-8 mt-10 rounded-lg shadow-md w-[90%] md:w-2/3 lg:w-1/2 text-white">
        <FaQuoteLeft className="text-orange-500 text-3xl absolute top-4 left-4" />
        <p className="text-lg text-center italic">
          {testimonials[currentIndex].feedback}
        </p>
        <FaQuoteRight className="text-orange-500 text-3xl absolute bottom-4 right-4" />

        <div className="flex flex-col items-center mt-6">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-16 h-16 rounded-full border-2 border-orange-500"
          />
          <h3 className="mt-3 text-xl font-semibold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-orange-400">{testimonials[currentIndex].role}</p>
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={prevTestimonial}
          className="bg-orange-500 px-4 py-2 rounded-md text-white"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-orange-500 px-4 py-2 rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
