import React from "react";

function Destinations () {
  const destinations = [
    { name: "Bora Bora, French Polynesia", tourism: "Tahiti Tourisme" },
    { name: "Maldives", tourism: "Visit Maldives" },
    { name: "Santorini, Greece", tourism: "Santorini Tourism" },
    { name: "Maui, Hawaii, USA", tourism: "GoHawaii" },
    { name: "Phuket, Thailand", tourism: "Phuket Tourism" },
    { name: "Bali, Indonesia", tourism: "Wonderful Indonesia" },
    { name: "Fiji", tourism: "Fiji Tourism" },
    { name: "Seychelles", tourism: "Seychelles Tourism" },
    { name: "St. Lucia, Caribbean", tourism: "Saint Lucia Tourism" },
    { name: "Koh Samui, Thailand", tourism: "Koh Samui Tourism" },
    { name: "Mykonos, Greece", tourism: "Mykonos Tourism" },
    { name: "Galápagos Islands, Ecuador", tourism: "Galápagos Travel" },
    { name: "Corsica, France", tourism: "Corsica Tourism" },
    { name: "Whitsunday Islands, Australia", tourism: "Whitsundays Tourism" },
    { name: "Zanzibar, Tanzania", tourism: "Zanzibar Tourism" },
    { name: "Mauritius", tourism: "Mauritius Tourism" },
    { name: "Palawan, Philippines", tourism: "Palawan Tourism" },
    { name: "Tahiti, French Polynesia", tourism: "Tahiti Tourisme" },
    { name: "Cabo Verde", tourism: "Visit Cabo Verde" },
    { name: "Isla Holbox, Mexico", tourism: "Holbox Island" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        Top Travel Destinations
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {destination.name}
            </h2>
            <p className="text-gray-600 mb-4">{destination.tourism}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;