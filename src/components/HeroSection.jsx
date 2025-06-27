import React from "react";

const HeroSection = () => (
  <section className="w-full h-[100vh] flex items-center justify-center relative text-center px-2 sm:px-4 bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
    {/* White overlay */}
    <div className="absolute inset-0 bg-white/60 z-0"></div>
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center relative z-10">
      <img src="/logo.png" alt="Eonbyte Logo" className="w-64 h-64 sm:w-60 sm:h-60 md:w-80 md:h-80 mb-4" />
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-blue-900 mb-2">Eonbyte Technologies Pvt. Ltd.</h1>
      <p className="text-lg sm:text-2xl md:text-4xl text-blue-700 mb-6">Unlocking Precision and Innovation</p>
      <a href="#categories" className="inline-block bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow hover:bg-blue-800 transition max-w-xs sm:max-w-none">Explore Our Products</a>
    </div>
  </section>
);

export default HeroSection; 