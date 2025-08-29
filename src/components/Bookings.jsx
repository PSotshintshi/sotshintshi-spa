import React, { useState } from "react";

function Bookings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [packages, setPackage] = useState(1);
  const [treatments, setTreatments] = useState([]);
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const treatmentOptions = [
    "Relaxing Massage",
    "Facial Rejuvenation",
    "Body Scrub & Wrap",
    "Couples Retreat",
    "Hot Stone Therapy",
    "Aromatherapy"
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setTreatments((prev) => [...prev, value]);
    } else {
      setTreatments((prev) => prev.filter((treatment) => treatment !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Thank you, ${name}! Your booking for ${treatments.join(", ")} on ${date} for ${guests} guest(s) has been received.`;
    console.log(message);
    console.log("Additional Comments:", comments);
    
    setShowPopup(true);
    setName("");
    setEmail("");
    setGuests(1);
    setPackage(1)
    setTreatments([]);
    setDate("");
    setComments("");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg relative">
      <h2 className="text-2xl font-bold mb-4 text-center">Book a Treatment</h2>
      <p className="text-xl text-center font-semibold text-gray-600 mb-4">
        The booking will only be confirmed once a spa representative has contacted you.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-semibold mb-1">Full Name:</label>
          <input
            id="name"
            type="text"
            placeholder="e.g., Jane Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="e.g., jane.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="guests" className="text-gray-700 font-semibold mb-1">Number of Guests</label>
          <input
            id="guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            max="10"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
         <div className="flex flex-col">
          <label htmlFor="package" className="text-gray-700 font-semibold mb-1">Select the Package</label>
          <input
            id="package"
            type="number"
            value={packages}
            onChange={(e) => setPackage(e.target.value)}
            min="0"
            max="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-2">Select Treatments</label>
          <div className="space-y-2">
            {treatmentOptions.map((treatment) => (
              <div key={treatment} className="flex items-center">
                <input
                  type="checkbox"
                  id={treatment}
                  value={treatment}
                  checked={treatments.includes(treatment)}
                  onChange={handleCheckboxChange}
                  className="mr-2 text-purple-600 focus:ring-purple-500 rounded"
                />
                <label htmlFor={treatment} className="text-gray-600">{treatment}</label>
              </div>
            ))}
          </div>
        </div>

    
        <div className="flex flex-col">
          <label htmlFor="date" className="text-gray-700 font-semibold mb-1">Preferred Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        
        <div className="flex flex-col">
          <label htmlFor="comments" className="text-gray-700 font-semibold mb-1">Additional Comments</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="e.g., Please note any allergies or special requests."
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 bg-purple-700 text-white font-bold rounded-md hover:bg-purple-800 transition-colors duration-200"
        >
          Submit Booking
        </button>
      </form>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-sm mx-auto relative">
            <button
              onClick={handleClosePopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your booking has been received. A spa representative will be in touch shortly to confirm your reservation.
            </p>
            <button
              onClick={handleClosePopup}
              className="px-4 py-2 bg-purple-700 text-white font-bold rounded-md hover:bg-purple-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;
