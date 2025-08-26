// Packages.jsx
import React from "react";

const packages = [
  {
    title: "Relaxation Escape",
    duration: "60 min",
    price: "R600",
    description:
      "A calming full-body massage to ease tension and restore inner balance.",
  },
  {
    title: "Glow Facial Package",
    duration: "45 min",
    price: "R500",
    description:
      "Deep cleansing, hydration, and skin rejuvenation for a radiant glow.",
  },
  {
    title: "Luxury Indulgence",
    duration: "90 min",
    price: "R900",
    description:
      "Includes a full-body massage, facial, and aromatherapy for ultimate relaxation.",
  },
  {
    title: "Couples Retreat",
    duration: "120 min",
    price: "R1,600",
    description:
      "Share a blissful spa journey together with massages and facials side by side with you partner.",
  },
];

export default function Packages() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Spa Packages
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {pkg.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">{pkg.duration}</p>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-pink-600">
                {pkg.price}
              </span>
              <button className="rounded-full px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}