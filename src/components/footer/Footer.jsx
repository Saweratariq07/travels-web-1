import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col space-y-2 text-white text-md font-bold md:text-left">
          <a href="#" className="hover:underline">
            Terms And Conditions
          </a>
          <a href="#" className="hover:underline">
            Disclaimer
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-2 text-white text-md font-bold mt-6 md:mt-0">
          <a href="#" className="hover:underline">
            Durable
          </a>
          <a href="#" className="hover:underline">
            Vacancies
          </a>
          <a href="#" className="hover:underline">
            Copyright
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>

        {/* Badge Section */}
        <div className="mt-6 md:mt-0">
          <img
            src="foot.png"
            alt="Badges"
            className="w-40 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
