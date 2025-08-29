import React, { useState } from "react";

export default function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setShowPopup(true);

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Form */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-6 text-gray-800">
            Contact Us
          </h1>
          <p className="text-center lg:text-left text-gray-600 mb-6">
            Have questions or want to book your spa experience? Fill out the form
            below and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="text-gray-700 font-semibold mb-1 block">
                Name:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold mb-1 block">
                Email Address:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="text-gray-700 font-semibold mb-1 block">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start text-gray-700 text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <p className="mb-4">We’d love to hear from you. Reach us through:</p>
          <p className="mb-3">📍 No.3 Spa Street, Johannesburg, South Africa</p>
          <p className="mb-3">📞 +27 11 123 4567</p>
          <p>✉️ info@sotshintshispa.com</p>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-auto relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your message has been received. We will keep in touch.
            </p>
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 bg-pink-500 text-white font-bold rounded-md hover:bg-pink-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
