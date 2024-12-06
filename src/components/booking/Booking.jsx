import React from "react";

const Booking = () => {
  return (
    <div>
         
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
    >
         <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline 
              poster="https://example.com/your-fallback-image.jpg"
            >
              <source src="https://videos.pexels.com/video-files/4133023/4133023-sd_640_360_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
      <div className="relative w-[350px] h-[670px] rounded-[2rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden flex flex-col items-center">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-3xl"></div>

        <div className="flex flex-col w-full h-full relative">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
              poster="https://example.com/your-fallback-image.jpg" 
            >
              <source src="https://videos.pexels.com/video-files/5614724/5614724-sd_360_640_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="relative z-10 flex-1 p-6 rounded-t-[2rem] flex flex-col justify-center">
            <h1 className="text-lg font-semibold text-orange-500  mb-4 text-center">
              Booking Form
            </h1>
            <form className="space-y-4 p-4 rounded">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
    </div>
  );
};

export default Booking;
