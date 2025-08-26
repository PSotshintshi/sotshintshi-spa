
import React from "react";
export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-6 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Have questions or want to book your spa experience? Fill out the form
          below and we’ll get back to you.
        </p>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Name:</label>
            <input
            id="name"
              type="text"
              placeholder="Your Name"
              className="block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
              
      <div className="w-full">
      <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email Address:</label>
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            </div>

      <div className="w-full">
      <label htmlFor="message" className="text-gray-700 font-semibold mb-1">Your Message</label>
            <textarea
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

        <div className="mt-8 text-center text-gray-700">
          <p className="mb-2">📍 13 Spa Street,Johannesburg, South Africa</p>
          <p className="mb-2">📞 +27 456 456 7890</p>
          <p>✉️ info@sotshintshispa.com</p>
        </div>
      </div>
    </div>
  );
}
