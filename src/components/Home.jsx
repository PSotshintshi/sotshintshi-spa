import React from "react";
import spaImage from "./spa-images/landingpage.png";

function Home() {
  return (
    <section
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] bg-center bg-cover flex items-center justify-left"
      style={{ backgroundImage: `url(${spaImage})` }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 text-justify-items-start px-4 sm:px-6 md:px-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-emerald-700 mb-16">
          Welcome to Sotshintshi Spa & Beauty
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-teal-600 mb-4">
          Your Escape to Peace & Wellness
        </h2>
        
        <p className="text-gray-700 font-bold text-base sm:text-lg md:text-lg mb-4 leading-relaxed">
          Rejuvenate your body, mind, and spirit with our tailored spa
          experiences. At Sotshintshi Spa & Beauty, we believe taking time for
          yourself is essential. From soothing massages to revitalizing skincare
          treatments, our goal is to provide a serene escape from the everyday hustle.
        </p>
        
        <p className="text-gray-700 font-bold text-base sm:text-lg md:text-lg mb-6 leading-relaxed">
          Discover the ultimate in relaxation, beauty, and wellness — because you
          deserve it.
        </p>
        <button className="px-8 py-6 mt-12 bg-rose-500 text-white font-semibold rounded-lg shadow-lg hover:bg-rose-600 transition transform hover:scale-105">
          Book a Massage Now
        </button>
      </div>
    </section>
  );
}

export default Home;
