import React, { useEffect, useState } from "react";

const OpeningLoader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 600); // match fade duration
    }, 500); // show loader for 1s
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Sliding panels with gradient */}
      <div className="absolute inset-0 flex">
        <div className={`h-full w-1/2 transition-transform duration-700 ${hide ? "-translate-x-full" : "translate-x-0"}`} style={{ background: "linear-gradient(to bottom right, #dbeafe, #f0f9ff, #bfdbfe)" }}></div>
        <div className={`h-full w-1/2 transition-transform duration-700 ${hide ? "translate-x-full" : "translate-x-0"}`} style={{ background: "linear-gradient(to bottom right, #dbeafe, #f0f9ff, #bfdbfe)" }}></div>
      </div>
      <img
        src="/logo.png"
        alt="Eonbyte Logo"
        className={`w-128 h-128 z-10 transition-transform duration-700 ${hide ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}
        style={{ filter: "drop-shadow(0 0 16px #1e3a8a55)" }}
      />
    </div>
  );
};

export default OpeningLoader; 