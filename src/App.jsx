import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Treatments from "./components/Treatments";
import Packages from "./components/Packages";
import Bookings from "./components/Bookings";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/bookings" element={<Bookings />} />
         <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>
    </>
  );
}

export default App;
