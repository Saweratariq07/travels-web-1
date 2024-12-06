'use client'
import React, { useState } from "react";

const Location = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);

  const fetchLocation = async () => {
    const apiKey = "https://countriesnow.space/api/v0.1/countries";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();
    if (data.results.length > 0) {
      setLocation(data.results[0]);
    } else {
      setLocation(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city or country"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1"
      />
      <button onClick={fetchLocation} className="bg-blue-500 text-white px-3 py-1 ml-2">
        Search
      </button>
      {location && (
        <div className="mt-4">
          <p><strong>Formatted Address:</strong> {location.formatted}</p>
          <p><strong>Coordinates:</strong> {location.geometry.lat}, {location.geometry.lng}</p>
        </div>
      )}
    </div>
  );
};

export default Location;
