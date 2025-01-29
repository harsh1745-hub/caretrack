import React from "react";
import { Link } from "react-router-dom";

const imagingServices = [
  {
    title: "AI-Powered X-Ray Analysis",
    description:
      "Detect lung diseases, fractures, and abnormalities with AI-driven X-ray analysis.",
    link: "/xrayScan"
  },
  {
    title: "MRI Scan Interpretation",
    description:
      "Advanced AI models assist in MRI image processing to detect brain disorders, tumors, and more.",
    link: "/mri"
  },
  {
    title: "CT Scan Diagnosis",
    description:
      "AI-powered CT scan evaluation helps identify organ issues and complex fractures instantly.",
    link: "/ct-scan-diagnosis"
  },
];

const MedicalImagingSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">AI Medical Imaging Analysis</h2>
        <p className="text-lg mb-12">
          Our AI models provide real-time insights for X-ray, MRI, and CT scan images,
          assisting doctors in fast and accurate diagnosis.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {imagingServices.map((service, index) => (
            <Link to={service.link} key={index} className="p-6 shadow-md rounded-lg">
              <div className="p-6 shadow-md rounded-lg">
                <img
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalImagingSection;