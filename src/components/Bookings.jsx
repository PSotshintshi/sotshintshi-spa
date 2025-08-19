import React, { useState } from "react";

function Bookings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your booking for ${service} on ${date} has been received.`);
    setName(""); setEmail(""); setService(""); setDate("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Treatment</h2>
      <p>The booking will only be confirmed once the spa representative has been in contact with you.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <select value={service} onChange={e=>setService(e.target.value)} required className="w-full px-3 py-2 border rounded">
          <option value="">Select a Package</option>
          <option value="Package1">Package 1</option>
          <option value="Package2">Package 2</option>
          <option value="Package3">Package 3</option>
          <option value=" Package4">Package 4</option>
        </select>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">Submit</button>
      </form>
    </div>
  );
}

export default Bookings;
