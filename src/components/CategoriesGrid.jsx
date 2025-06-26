import React from "react";
import { categories } from "../data/categories";
import { useNavigate } from "react-router-dom";

const CategoriesGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="categories" className="py-8 sm:py-12 bg-blue-50">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-blue-900">Explore Our Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mx-auto px-2">
        {categories.map((cat, i) => (
          <div
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105 p-6 flex flex-col items-center group"
          >
            <img src={cat.icon} alt={cat.name} className="w-16 h-16 mb-4 group-hover:scale-110 transition" />
            <span className="text-lg font-medium text-blue-800">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesGrid; 