import React from 'react';
import './styles.css';
import { FaRegHandshake, FaRegClock, FaHeadset, FaUsers, FaCreditCard, FaGlobe } from 'react-icons/fa';

export default function ScrollingBadges() {
  return (
    <div className="relative z-50 overflow-hidden  py-4">
      {/* Scrolling container */}
      <div className="flex badges gap-4">
        {/* Badges with Icons */}
        <div className="flex items-center px-4 bg-orange-500 py-2 border border-gray-500   rounded-full">
          <FaRegHandshake className="mr-2 text-white" /> Negotiated Rates
        </div>
        <div className="flex items-center px-4 py-2 bg-orange-500 border border-gray-500 text-white rounded-full">
          <FaRegClock className="mr-2 text-white" /> No Contracts
        </div>
        <div className="flex items-center px-4 py-2 bg-orange-500 border border-gray-500 text-white rounded-full">
          <FaHeadset className="mr-2 text-white" /> 24/7 Support
        </div>
        <div className="flex items-center px-4 py-2 border bg-orange-500 border-gray-500 text-white rounded-full">
          <FaUsers className="mr-2 text-white" /> 8+ Rooms Group Request
        </div>
        <div className="flex items-center px-4 py-2 border bg-orange-500 border-gray-500 text-white rounded-full">
          <FaCreditCard className="mr-2 text-white" /> Pay with Travel Credit
        </div>
        <div className="flex items-center px-4 py-2 border bg-orange-500 border-gray-500 text-white rounded-full">
          <FaGlobe className="mr-2 text-white" /> Over 750,000 Hotels Globally
        </div>
      </div>
      
    </div>
  );
}
