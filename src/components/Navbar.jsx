import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
      <Link to="/treatments" style={{ marginRight: "20px" }}>Treatments</Link>
      <Link to="/packages" style={{ marginRight: "20px" }}>Packages</Link>
      <Link to="/bookings" style={{ marginRight: "20px" }}>Bookings</Link>
      <Link to="/contactUs">Contact Us</Link>
    </nav>
  );
}

export default Navbar;  // 👈 make sure this line exists

