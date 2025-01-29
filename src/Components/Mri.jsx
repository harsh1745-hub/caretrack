import React, { useState } from "react";

const MRIScan = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      alert("Please upload an MRI scan first!");
      return;
    }

    const formData = new FormData();
    formData.append("mri", selectedFile);

    setLoading(true);

    try {
      const response = await fetch("http://your-backend-api.com/analyze-mri", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setAnalysisResult(data); // Update result
    } catch (error) {
      console.error("Error analyzing MRI:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        AI-Powered
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}MRI Scan Analysis
        </span>
      </h1>
      <p className="mt-6 text-lg text-center text-neutral-500 max-w-4xl">
        Upload your MRI scan and let AI detect anomalies with high accuracy.
      </p>

      <div className="mt-8 flex flex-col items-center space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded-md cursor-pointer"
        />

        <button
          onClick={handleAnalyze}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white"
        >
          {loading ? "Analyzing..." : "Analyze Now"}
        </button>
      </div>

      {analysisResult && (
        <div className="mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Analysis Result:</h2>
          <p className="mt-2">{analysisResult.message}</p>
        </div>
      )}
    </div>
  );
};

export default MRIScan;
