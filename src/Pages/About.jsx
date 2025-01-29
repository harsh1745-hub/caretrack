import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        About
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          CareTrack
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empowering healthcare through AI-driven solutions. Our mission is to
        revolutionize healthcare by providing accessible, accurate, and
        affordable AI-powered tools for diagnosis and treatment.
      </p>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At CareTrack, our mission is to revolutionize healthcare by
            providing accessible, accurate, and affordable AI-powered tools for
            diagnosis and treatment. We aim to empower patients and doctors with
            cutting-edge technology to improve health outcomes.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where healthcare is personalized, predictive,
            and preventive. By leveraging AI and machine learning, we strive to
            make advanced medical insights available to everyone, regardless of
            their location or resources.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">Co-Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
            
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Chief Medical Officer</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              
              alt="Team Member"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Mike Johnson</h3>
            <p className="text-gray-600">Lead AI Engineer</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className=" py-16 mt-20 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-orange-500 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">AI-Powered Insights</h3>
                <p className="text-white">
                  Our platform uses advanced AI algorithms to provide accurate
                  and reliable medical insights.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-orange-600 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">User-Friendly</h3>
                <p className="text-white">
                  Designed with simplicity in mind, our platform is easy to use
                  for both patients and doctors.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-orange-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">Affordable</h3>
                <p className="text-white">
                  We believe in making healthcare accessible to everyone, so our
                  services are affordable and cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-6">Join Us Today</h2>
        <p className="text-lg text-center text-neutral-500 mb-8">
          Sign up now and experience the future of healthcare.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 mx-3 rounded-md text-white"
          >
            Get Started
          </a>
          <a
            href="#"
            className="py-3 px-6 mx-3 rounded-md border border-orange-500 text-orange-500"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex mt-20 justify-center max-w-6xl mx-auto px-4">
        <video
         
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          Your browser does not support the video tag.
        </video>
        <video
          
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default About;