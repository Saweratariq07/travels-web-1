import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
    {/* Content Section */}
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Side */}
      <div>
        <h2 className="text-lg font-bold uppercase">Personal Travel Agent</h2>
        <h1 className="text-3xl font-extrabold text-orange-400 mt-2">
          COLINDA VD MAAGDENBERG
        </h1>
        <p className="mt-4 text-gray-300">
          Sint Walfridusstraat 27 <br />
          4711VC Sint Willebrord <br />
          Phone: 08-29823014 <br />
          <a href="mailto:Colinda@Travelcompany.NL" className="text-blue-400 hover:underline">
            Colindag@Travelcompany.NL
          </a>
        </p>
        <p className="mt-6 text-sm text-gray-400">
          Appointment: <br />
          Personal Travel Agent Colinda Van Den Maagdenberg Heeft Een Kantoor Aan Huis. Je Kunt Een E-Mail Sturen Of
          Telefonisch Contact Opnemen.
        </p>
        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">
            Your Travel Agent
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Contact Form
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <h1 className="text-3xl font-extrabold uppercase text-yellow-400">
          YOUR PERSONAL TRAVEL AGENT!
        </h1>
        <p className="mt-6 text-gray-300">
          My name is Colinda Van Den Maagdenberg, and I would like to personally welcome you to my website.
          With over 25 years of experience in the travel industry, I still enjoy traveling, visiting new destinations,
          and passing this information on to my clients. I find it important to give my honest opinion and will
          always try to find the right holiday that fits the needs and wishes of the customer.
        </p>
        <p className="mt-4 text-gray-300">
          I work from my home office, by appointment. You can contact me by email, phone, or social media at a time that suits you.
          I look forward to hearing from you soon!
        </p>
        <p className="mt-4 font-bold text-yellow-400">
          Your Personal Travel Agent, <br />
          Colinda Van Den Maagdenberg
        </p>
      </div>
    </div>

    <div className="absolute  ">
    <img src="banner.png" alt="" />
    </div>
  </div>
 
  );
};

export default HeroSection;
