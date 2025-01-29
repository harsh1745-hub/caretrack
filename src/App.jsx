import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Feautre";
import Login from "./Pages/Login";
import About from "./Pages/About";
import ServicesSection from "./Pages/Services";
import Xray from "./Components/Xray";
import HeroSection from "./Components/Hero";
import XrayScan from "./Components/XrayScan";
import MRIScan from "./Components/Mri";
import Footer from "./Components/Footer";
import IoTIntegration from "./Components/IotIntegration";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/xray" element={<Xray />} />
        <Route path="/xrayScan" element={<XrayScan />} />
        <Route path="/mri" element={<MRIScan />} />
        <Route path=" /iot-integration" element={<IoTIntegration />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
