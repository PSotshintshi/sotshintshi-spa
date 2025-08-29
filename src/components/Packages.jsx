import React from "react";
import { useNavigate } from "react-router-dom"; 

const packages = [
  {
    title: "(1) Relaxation Escape",
    duration: "60 min",
    price: "R600",
    description:
      "A calming full-body massage to ease tension and restore inner balance.",
  },
  {
    title: "(2) Glow Facial Package",
    duration: "45 min",
    price: "R500",
    description:
      "Deep cleansing, hydration, and skin rejuvenation for a radiant glow.",
  },
  {
    title: "(3) Luxury Indulgence",
    duration: "90 min",
    price: "R900",
    description:
      "Includes a full-body massage, facial, and aromatherapy for ultimate relaxation.",
  },
  {
    title: " (4) Couples Retreat",
    duration: "120 min",
    price: "R1,600",
    description:
      "Share a blissful spa journey together with massages and facials side by side with your partner.",
  },
  {
    title: "(5) Head to Toes",
    duration: "200 min",
    price: "R2,400",
    description:
      "Enjoy a blissful spa journey from head to toes: massages, facials, body massage, manicure and pedicure.",
  },
];

export default function Packages() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/bookings"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        Spa Packages
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="h-[250px] max-w-[500px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-6 flex flex-col justify-between mx-auto"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {pkg.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">{pkg.duration}</p>
              <p className="text-gray-600 text-sm leading-snug">{pkg.description}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-pink-600">{pkg.price}</span>
              <button
                onClick={handleBookingClick}
                className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
