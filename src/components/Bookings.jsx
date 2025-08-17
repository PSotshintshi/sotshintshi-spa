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
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <select value={service} onChange={e=>setService(e.target.value)} required className="w-full px-3 py-2 border rounded">
          <option value="">Select Service</option>
          <option value="Facial">Facial</option>
          <option value="Massage">Massage</option>
          <option value="Manicure">Manicure</option>
        </select>
        <input type="date" value={date} onChange={e=>setDate(e.target.value)} required className="w-full px-3 py-2 border rounded"/>
        <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800">Submit</button>
      </form>
    </div>
  );
}

export default Bookings;
