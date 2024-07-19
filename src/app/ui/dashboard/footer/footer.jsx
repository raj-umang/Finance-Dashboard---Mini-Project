import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151C2C] text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Personal Finance Dashboard</h3>
        </div>
        <div className="mb-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Contact
          </a>
        </div>
        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
