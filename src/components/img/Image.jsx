import React from 'react';

const Image = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex items-center justify-center mb-8">
        <span className="text-xl font-semibold text-blue-600">Fantastic 9.0</span>
        <div className="flex ml-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 17.75l-5.02 2.63 1.28-5.64-4.32-4.11 5.67-.47L12 2l2.39 7.29 5.67.47-4.32 4.11 1.28 5.64z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-blue-200 p-6 text-center rounded-xl shadow-lg">
          <p className="text-3xl font-bold text-orange-500">100+</p>
          <p className="text-sm">Holidays Packages</p>
        </div>
        <div className="bg-blue-200 p-6 text-center rounded-xl shadow-lg">
          <p className="text-3xl font-bold text-orange-500">500+</p>
          <p className="text-sm">Luxury Hotels</p>
        </div>
        <div className="bg-blue-200 p-6 text-center rounded-xl shadow-lg">
          <p className="text-3xl font-bold text-orange-500">251</p>
          <p className="text-sm">Reviews</p>
        </div>
        <div className="bg-blue-200 p-6 text-center rounded-xl shadow-lg">
          <p className="text-3xl font-bold text-orange-500">120M</p>
          <p className="text-sm">Satisfied Travelers</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
