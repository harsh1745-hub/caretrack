import React from "react";
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Revolutionizing Healthcare
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          with AI
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empowering doctors, patients, and healthcare providers with AI-driven
        diagnostics, intelligent reports, and personalized medicine
        recommendations.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          GET STARTED
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
         LEARN MORE
        </a>
      </div>
      <div className="flex mt-10 justify-center">
      <video
        src={video1}
        autoPlay
        loop
        muted
        className="rounded-lg w-1/2 ml-10 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
      >
        Your browser does not support the video tag.
      </video>
        <video
            src={video2}
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 mr-10 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
