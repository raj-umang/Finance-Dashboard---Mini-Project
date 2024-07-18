import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Finance Dashboard. All rights
          reserved.
        </p>
        <div className="mt-2">
          <a
            href="/privacy-policy"
            className="text-blue-400 hover:underline mx-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-blue-400 hover:underline mx-2"
          >
            Terms of Service
          </a>
          <a href="/support" className="text-blue-400 hover:underline mx-2">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
