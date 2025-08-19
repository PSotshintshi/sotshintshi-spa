import React from "react";
import spaImage from "./spa-images/landingpage.png";

function Home() {
  return (
    <section 
      className="relative min-h-1200 bg-center bg-cover"
      style={{ backgroundImage: `url(${spaImage})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">
          Your escape to Peace & Wellness
        </h1>
        <p className="text-lg text-gray-700">
          Rejuvenate your body, mind, and spirit with our tailored spa experiences.
        </p>
        <button className="Book">Book a Massage Now</button>
      </div>
    </section>
  );
}

export default Home;
