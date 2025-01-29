import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        Revolutionizing Healthcare
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with AI
        </span>
      </h1>
      <p className="mt-6 text-base sm:text-lg text-center text-neutral-500 max-w-4xl">
        Empowering doctors, patients, and healthcare providers with AI-driven
        diagnostics, intelligent reports, and personalized medicine
        recommendations.
      </p>
      <div className="flex flex-col sm:flex-row justify-center my-8 sm:my-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white font-semibold text-center"
        >
          GET STARTED
        </a>
        <a
          href="#"
          className="py-3 px-6 rounded-md border border-orange-600 text-white font-semibold text-center"
        >
          LEARN MORE
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-6 md:mt-10 justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
        <video
          src={video1}
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400"
        >
          Your browser does not support the video tag.
        </video>
        <video
          src={video2}
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
