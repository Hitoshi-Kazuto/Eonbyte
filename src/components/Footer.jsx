import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-6 sm:py-8 mt-8">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-4 text-center justify-items-center">
      <div>
        <h4 className="font-bold text-lg mb-2">Eonbyte Technologies Pvt Ltd</h4>
        <p>Unlocking Precision and Innovation</p>
      </div>
      <div>
        <h4 className="font-bold text-lg mb-2">Contact</h4>
        <p>Eonbyte Technologies Pvt Ltd</p>
      </div>
    </div>
    <p className="text-center text-sm mt-2 sm:mt-4 text-blue-200">&copy; {new Date().getFullYear()} Eonbyte Technologies Pvt Ltd</p>
  </footer>
);

export default Footer; 