import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 sm:py-8 mt-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-4 text-center justify-items-center">
      <div>
        <h4 className="font-bold text-lg mb-2">Eonbyte Technologies Pvt. Ltd.</h4>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">Contact Us</h4>
        <a href="tel:+919120780886" className="hover:underline text-blue-200">
          (+91) 91207 80886
        </a>
        <h4 className="font-bold text-lg mb-2">Email Us</h4>
        <a href="mailto:utkarshoberai@eonbytetechnologies.com" className="hover:underline text-blue-200">
          utkarshoberai@eonbytetechnologies.com
        </a>
      </div>
    </div>
    <p className="text-center text-sm mt-5 sm:mt-8">&copy; {new Date().getFullYear()} Eonbyte Technologies Pvt. Ltd.</p>
  </footer>
);

export default Footer; 