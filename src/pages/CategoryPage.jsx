import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { categories } from "../data/categories";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();
  const products = productsData[slug] || [];
  const category = categories.find((c) => c.slug === slug);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">{category?.name || "Category"}</h2>
      {category?.info && (
        <p className="text-blue-700 mb-8">{category.info}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.length ? (
          products.map((p, i) => <ProductCard key={i} product={p} categorySlug={slug} productIndex={i} />)
        ) : (
          <p className="col-span-full text-center text-blue-700">No products found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage; 