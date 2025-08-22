// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SotSpa</h2>
          <p className="text-pink-100">
            Escape the stress of everyday life and discover true relaxation.
            Indulge in our spa treatments designed to rejuvenate your body and mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:underline">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2">📍 123 Spa Street, Cape Town, South Africa</p>
          <p className="mb-2">📞 +27 123 456 7890</p>
          <p>✉️ info@sotspa.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pink-500 py-4 text-center text-sm text-pink-100">
        © {new Date().getFullYear()} SotSpa. All rights reserved.
      </div>
    </footer>
  );
}
