import React from "react";

function Main() {
  return (
    <div>
      <div className="flex flex-wrap container rounded-[15px] overflow-hidden py-8 mx-auto">
        <div className="flex-1 relative  flex-col justify-center items-center p-5 hidden sm:flex">
          <div>
            <img
              src="/building.png"
              alt="Building"
              className="h-[280px] md:h-[560px] rounded-[20px] mb-4 object-cover"
            />
          </div>
          <div className="absolute left-[10%] md:left-[200px] top-[50px] md:top-[180px]">
            <img
              src="/building2.png"
              alt="Building 2"
              className="h-[280px] md:h-[560px] rounded-[20px] object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1.2 p-5 flex flex-col justify-between">
          {/* Top Info */}
          <div className="mb-5">
            <p className="text-lg md:text-xl text-blue-800 font-bold mb-2">
              Fantastic 9.0
            </p>
            <img
              src="/stars.png"
              alt="Stars"
              className="w-[100px] md:w-[150px] mb-4"
            />
            <div className="grid grid-cols-2 gap-2 w-full sm:w-[300px]">
              <div className="flex flex-col items-center justify-between bg-[#e6e6fa] rounded-[10px] text-[#ff6700] font-bold py-4 p-2">
                100+ <span className="text-[10px] text-[#0077b6]">Holiday Packages</span>
              </div>
              <div className="flex flex-col items-center justify-between bg-[#e6e6fa] rounded-[10px] text-[#ff6700] font-bold py-4 p-2">
                500+ <span className="text-[10px] text-[#0077b6]">Luxury Hotels</span>
              </div>
              <div className="flex flex-col items-center justify-between bg-[#e6e6fa] py-4 rounded-[10px] text-[#ff6700] font-bold p-2">
                251 <span className="text-[10px] text-[#0077b6]">Countries</span>
              </div>
              <div className="flex flex-col items-center justify-between bg-[#e6e6fa] py-4 rounded-[10px] text-[#ff6700] font-bold p-2">
                120M <span className="text-[10px] text-[#0077b6]">Satisfied Travelers</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-5 bg-white shadow-md w-full md:w-[350px] rounded-[10px] text-center relative">
            <h2 className="text-[1rem] md:text-[1.3rem] font-sans underline mb-4 text-[#e09637]">
              ASK YOUR QUESTION TO COLINDA VD MAAGDENBERG
            </h2>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="What is Your Name?"
                required
                className="mb-2 p-2 text-sm md:text-base w-full md:w-[90%] border border-[#0077b6] rounded-[5px] placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="What is Your Phone Number?"
                required
                className="mb-2 p-2 text-sm md:text-base w-full md:w-[90%] border border-[#0077b6] rounded-[5px] placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Where Do You Come From?"
                required
                className="mb-2 p-2 text-sm md:text-base w-full md:w-[90%] border border-[#0077b6] rounded-[5px] placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="mb-2 p-2 text-sm md:text-base w-full md:w-[90%] border border-[#0077b6] rounded-[5px] placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="How Can I Help You?"
                required
                className="mb-2 p-2 text-sm md:text-base w-full md:w-[90%] border border-[#0077b6] rounded-[5px] placeholder-gray-400"
              />
              <p className="text-[#e09637] underline text-[12px] md:text-[16px] self-start mb-2 cursor-pointer">
                our privacy statement applies
              </p>
              <button
                type="submit"
                className="p-2 text-xs md:text-sm text-white bg-[#ff6700] rounded-[5px] w-full md:w-[150px] hover:bg-[#ff5a4d]"
              >
                Ask Your Questions
              </button>
            </form>
            <img
              src="img/bags.png"
              alt=""
              className="w-[50px] md:w-[80px] absolute bottom-0 right-[-10px] md:right-[-20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
