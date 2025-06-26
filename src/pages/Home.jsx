import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import PartnerCarousel from "../components/PartnerCarousel";
import CategoriesGrid from "../components/CategoriesGrid";
import OpeningLoader from "../components/OpeningLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The loader will call setLoading(false) after animation
  }, []);

  return (
    <>
      {loading && <OpeningLoader onFinish={() => setLoading(false)} />}
      <div className={loading ? "invisible" : "visible transition-opacity duration-500 opacity-100"}>
        <HeroSection />
        <PartnerCarousel />
        <CategoriesGrid />
      </div>
    </>
  );
};

export default Home; 