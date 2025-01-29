import React from "react";
import image01 from "../assets/images.jpg";
import image02 from "../assets/img.webp";
import image03 from "../assets/iot.jpg";
import image04 from '../assets/download.jpg'
function Features() {
  return (
    <>
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Feature
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Easily Take{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              your Result
            </span>
          </h2>
        </div>

        {/* Features Section with Images */}
        <div className="flex flex-wrap mt-10 lg:mt-20 justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src={image01}
              alt="AI-XRAY ANALYSIS"
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <h5 className="mt-4 text-xl font-semibold">AI XRAY ANALYSIS.</h5>
            <p className="text-md text-neutral-500 mt-2">
              A brief description about this feature.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src={image02}
              alt=""
              className="w-full h-56 object-cover rounded-2xl  border border-orange-700 shadow-sm shadow-orange-400"
            />
            <h5 className="mt-4 text-xl font-semibold">REPORT ANALYSIS.</h5>
            <p className="text-md text-neutral-500 mt-2">
              A brief description about this feature.
            </p>
          </div>

          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src={image03}
              alt=""
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <h5 className="mt-4 text-xl font-semibold">
              IOT DEVICES INTEGRATION.
            </h5>
            <p className="text-md text-neutral-500 mt-2">
              A brief description about this feature.
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4 text-center">
            <img
              src={image04}
              alt=""
              className="w-full h-56 object-cover rounded-2xl shadow-lg"
            />
            <h5 className="mt-4 text-xl font-semibold">
              MEDICINE RECOMMENDATION.
            </h5>
            <p className="text-md text-neutral-500 mt-2">
              A brief description about this feature.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
