"use client";

import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";

const Component = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleRangeChange = (ranges) => {
    setSelectedRange(ranges.selection);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <div className="relative h-[400px] sm:h-[500px] xl:h-[600px] 2xl:h-[700px] overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex justify-center items-center p-4 sm:p-6 mx-auto max-w-5xl h-full">
        <div className="bg-gray-500 bg-opacity-80 p-4 sm:p-6 rounded-lg shadow-lg w-full">
          <div className="flex flex-wrap gap-4 items-end">
            {/* Location Dropdown */}
            <div className="relative">
              <label className="text-white font-medium flex items-center gap-2 mb-2">
                <FaMapMarkerAlt /> Location
              </label>
              <div
                onClick={() => toggleDropdown("location")}
                className="w-[250px] px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white flex justify-between items-center"
              >
                <span>Select a destination</span>
              </div>

              {openDropdown === "location" && (
                <div className="absolute bg-white shadow-md rounded-md mt-2 w-full z-50">
                  <a
                    href="https://www.tahititourisme.com/"
                    className="block px-4 py-2 hover:bg-yellow-100 transition duration-200"
                  >
                    Bora Bora
                  </a>
                  <a
                    href="https://visitmaldives.com/en"
                    className="block px-4 py-2 hover:bg-yellow-100 transition duration-200"
                  >
                    Maldives
                  </a>
                  <a
                    href="https://www.santorini.gr/"
                    className="block px-4 py-2 hover:bg-yellow-100 transition duration-200"
                  >
                    Santorini, Greece
                  </a>
                  <a
                    href="https://www.gohawaii.com/es"
                    className="block px-4 py-2 hover:bg-yellow-100 transition duration-200"
                  >
                    Maui, Hawaii, USA
                  </a>
                  <a
                    href="https://www.tourismthailand.org/Destinations/Provinces/Phuket/350"
                    className="block px-4 py-2 hover:bg-yellow-100 transition duration-200"
                  >
                    Phuket, Thailand
                  </a>
                </div>
              )}
            </div>

            {/* Dates Dropdown */}
            <div className="relative">
              <label className="text-white font-medium flex items-center gap-2 mb-2">
                <FaCalendarAlt /> Dates
              </label>
              <div
                onClick={() => toggleDropdown("dates")}
                className="w-[250px] px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white flex justify-between items-center"
              >
                <span>Check-in — Check-out</span>
              </div>

              {openDropdown === "dates" && (
                <div className="absolute z-50 bg-white shadow-md rounded-md w-full mt-2 p-4">
                  <DateRange
                    ranges={[selectedRange]}
                    onChange={handleRangeChange}
                    moveRangeOnFirstSelection={false}
                    editableDateInputs={true}
                  />
                  <button
                    onClick={() => toggleDropdown(null)}
                    className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Person Dropdown */}
            <div className="relative">
              <label className="text-white font-medium flex items-center gap-2 mb-2">
                <FaUser /> Person
              </label>
              <div
                onClick={() => toggleDropdown("person")}
                className="w-[250px] px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white flex justify-between items-center"
              >
                <span>{`${adults} Adults · ${children} Children · ${rooms} Room`}</span>
              </div>

              {openDropdown === "person" && (
                <div className="absolute z-50 bg-white shadow-md rounded-md w-full mt-2 p-4">
                  <div className="mb-4">
                    <div className="flex justify-between items-center">
                      <span>Adults</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <span className="px-4">{adults}</span>
                        <button
                          onClick={() => setAdults(adults + 1)}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span>Children</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <span className="px-4">{children}</span>
                        <button
                          onClick={() => setChildren(children + 1)}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between  items-center mt-4">
                      <span>Rooms</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => setRooms(Math.max(1, rooms - 1))}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          -
                        </button>
                        <span className="px-4">{rooms}</span>
                        <button
                          onClick={() => setRooms(rooms + 1)}
                          className="px-2 py-1 bg-gray-200 rounded-md"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleDropdown(null)}
                    className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-md"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="ml-auto">
              <button
                onClick={() => setOpenDropdown(null)}
                className="bg-yellow-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-yellow-600 transition-all duration-200"
              >
                Find Trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
