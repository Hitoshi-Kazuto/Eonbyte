import React, { useRef, useEffect } from "react";

const brands = [
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
  "/brands/brand6.png",
  "/brands/brand7.png",
  "/brands/brand8.png",
  "/brands/brand9.png",
  "/brands/brand10.png",
  "/brands/brand11.png",
  "/brands/brand12.png",
  "/brands/brand13.png",
  "/brands/brand14.png",
  "/brands/brand15.png",
  "/brands/brand16.jpg",
  "/brands/brand17.png",
];

const SCROLL_SPEED = 1; // px per frame (adjust for smoothness)

const PartnerCarousel = () => {
  const scrollRef = useRef(null);
  // Duplicate brands for infinite effect
  const allBrands = [...brands, ...brands];

  // Infinite, smooth auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId;
    el.scrollLeft = 0;
    const smoothScroll = () => {
      el.scrollLeft += SCROLL_SPEED;
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
      }
      animationId = requestAnimationFrame(smoothScroll);
    };
    animationId = requestAnimationFrame(smoothScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Prevent user interaction (scroll, drag, touch)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const prevent = (e) => e.preventDefault();
    el.addEventListener('wheel', prevent, { passive: false });
    el.addEventListener('touchmove', prevent, { passive: false });
    el.addEventListener('pointerdown', prevent, { passive: false });
    return () => {
      el.removeEventListener('wheel', prevent);
      el.removeEventListener('touchmove', prevent);
      el.removeEventListener('pointerdown', prevent);
    };
  }, []);

  return (
    <section className="h-[28vh] sm:h-[34vh] bg-white flex flex-col justify-center">
      <h2 className="text-xl sm:text-3xl font-semibold text-center mb-2 sm:mb-4 text-blue-900 w-full">Our Partners</h2>
      <div className="relative w-full max-w-6xl mx-auto px-2 sm:px-0">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 sm:gap-8 px-2 sm:px-16 scrollbar-hide select-none"
          style={{
            scrollBehavior: "auto", // disables smooth for manual, but we use rAF
            pointerEvents: "none", // disables all pointer events
            userSelect: "none",
            msOverflowStyle: "none",
            scrollbarWidth: "none"
          }}
        >
          {allBrands.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Brand ${(i % brands.length) + 1}`}
              className="h-16 w-28 sm:h-24 sm:w-40 md:h-32 md:w-48 object-contain flex-shrink-0 rounded"
              draggable="false"
              style={{ pointerEvents: "auto" }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel; 