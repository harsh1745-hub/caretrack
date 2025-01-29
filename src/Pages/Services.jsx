import React from 'react';
import brain from '../assets/brain.jpg';
import heart from '../assets/heart.jpg';
import bottle from '../assets/bottle.jpg';
import laptop from '../assets/laptop.png';
import { Link } from "react-router-dom";

const services = [
  {
    image: brain,
    title: "AI Diagnostics",
    description: "Advanced AI-driven medical diagnostics to detect diseases early and accurately.",
    link: "/ai-diagnostics"
  },
  {
    image: heart,
    title: "Medical Imaging Analysis",
    description: "AI-powered analysis of X-rays, MRIs, and CT scans for faster and precise results.",
    link: "/xray"
  },
  {
    image: bottle,
    title: "Virtual Health Assistants",
    description: "AI chatbots and virtual assistants for 24/7 patient support and healthcare guidance.",
    link: "/virtual-health-assistants"
  },
  {
    image: laptop,
    title: "Remote Patient Monitoring",
    description: "IoT-integrated remote health monitoring for real-time updates and alerts.",
    link: "/iot-integration"
  },
  {
    image: brain,
    title: "EHR & Smart Reports",
    description: "AI-enhanced Electronic Health Records (EHR) for streamlined data management.",
    link: "/ehr-smart-reports"
  },
  {
    image: heart,
    title: "AI-Powered Drug Recommendations",
    description: "Personalized medicine recommendations based on patient history and AI analysis.",
    link: "/ai-powered-drug-recommendations"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto text-center">
        <span className="bg-gray-900 text-orange-500 rounded-full px-4 py-1 text-sm font-semibold uppercase">
          Our Services
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-6 font-bold tracking-wide">
          AI-Powered <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Healthcare Solutions</span>
        </h2>
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto">
          Transforming healthcare with AI-driven diagnostics, intelligent reports, and personalized medical assistance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {services.map((service, index) => (
            <Link to={service.link} key={index} className="p-6 border border-neutral-800 rounded-xl bg-gray-900 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <img src={service.image} alt={service.title} className="h-20 w-20 object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-400">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;