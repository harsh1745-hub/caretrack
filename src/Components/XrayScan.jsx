import React, { useState } from "react";


const XrayAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile.name);
      // Handle file upload logic
    }
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 text-white">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        AI-Powered
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}X-Ray Analysis
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Upload your X-ray image and let our AI model analyze it for accurate
        diagnostic insights.
      </p>
      <div className="flex justify-center my-10">
        <label className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md flex items-center gap-2">
          <img  alt="Upload" className="w-5 h-5" /> Upload X-Ray
          <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
        </label>
        <button
          onClick={handleUpload}
          className="py-3 px-4 mx-3 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-all"
        >
          Analyze Now
        </button>
      </div>
      <div className="flex mt-10 justify-center">
        {preview ? (
          <img
            src={preview}
            alt="X-ray Preview"
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          />
        ) : (
          <video
            
            autoPlay
            loop
            muted
            className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default XrayAnalysis;