import React from 'react';

const News = () => {
  return (
    <div className='mt-44'>
    <div className="flex justify-center items-center min-h-screen  relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute left-0 top-0 w-[40%]">
        <img src="bot.png" alt="Map Background" className="object-contain" />
      </div>

      {/* Form Section */}
      <div className="relative bg-white  shadow-lg rounded-lg p-8 max-w-md z-10">
        <h2 className="text-2xl font-bold text-blue-600 text-center mb-4">Subscribe To Newsletter</h2>
        <p className="text-gray-600 text-center text-sm mb-6">
          Sign Up For My Newsletter Packed With Travel Tips And Information.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Infix"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Surname"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
          >
            To Enroll
          </button>
        </form>
      </div>

      {/* Illustration Section */}
      <div className="relative ml-12  md:block">
        <img
          src="nat.png"
          alt="Traveler Illustration"
          className="max-w-md"
        />
      </div>
    </div>
    </div>
  );
};

export default News;
