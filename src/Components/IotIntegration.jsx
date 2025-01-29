import React, { useState } from "react";
import iotImage from "../assets/iots.avif";

const IoTIntegration = () => {
  const [deviceName, setDeviceName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [dataPreference, setDataPreference] = useState("real-time");

  const handleIntegration = (e) => {
    e.preventDefault();
    alert(`Device: ${deviceName}\nAPI Key: ${apiKey}\nData Preference: ${dataPreference}`);
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-10" data-aos="fade-right">
            <h2 className="text-4xl font-bold text-orange-500">
              AI-Powered IoT Integration
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              Seamlessly connect medical devices, wearables, and smart sensors to
              monitor real-time patient health data. Our AI-driven IoT
              integration enables predictive diagnostics, automated alerts, and
              remote healthcare solutions.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="text-orange-500 text-xl mr-3">&#8226;</span>
                Real-time patient monitoring
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 text-xl mr-3">&#8226;</span>
                Smart wearables & health trackers
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 text-xl mr-3">&#8226;</span>
                Automated alerts & early diagnosis
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 text-xl mr-3">&#8226;</span>
                Secure cloud-based health data
              </li>
            </ul>
            
            {/* IoT Integration Form */}
            <form onSubmit={handleIntegration} className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Integrate Your Device</h3>
              <input 
                type="text" 
                placeholder="Device Name" 
                value={deviceName} 
                onChange={(e) => setDeviceName(e.target.value)} 
                className="w-full p-2 mb-4 bg-gray-900 border border-orange-500 rounded-lg text-white"
                required
              />
              <input 
                type="text" 
                placeholder="API Key" 
                value={apiKey} 
                onChange={(e) => setApiKey(e.target.value)} 
                className="w-full p-2 mb-4 bg-gray-900 border border-orange-500 rounded-lg text-white"
                required
              />
              <select 
                value={dataPreference} 
                onChange={(e) => setDataPreference(e.target.value)} 
                className="w-full p-2 mb-4 bg-gray-900 border border-orange-500 rounded-lg text-white"
              >
                <option value="real-time">Real-Time Data</option>
                <option value="daily">Daily Summary</option>
              </select>
              <button type="submit" className="px-6 py-3 bg-orange-600 hover:bg-orange-800 text-white font-bold rounded-lg transition-all duration-300 w-full">
                Integrate Device
              </button>
            </form>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="fade-left">
            <img
              src={iotImage}
              alt="IoT Integration"
              className="rounded-lg shadow-lg border border-orange-500 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTIntegration;
