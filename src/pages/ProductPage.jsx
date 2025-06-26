import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import { categories } from "../data/categories";

const ProductPage = () => {
  const { categorySlug, productIndex } = useParams();
  const navigate = useNavigate();
  const products = productsData[categorySlug] || [];
  const product = products[productIndex];
  if (!product) {
    return <div className="max-w-3xl mx-auto py-16 text-center text-blue-900">Product not found.</div>;
  }
  const images = product.images || (product.image ? [product.image] : []);
  const [selected, setSelected] = useState(0);
  const category = categories.find((c) => c.slug === categorySlug);

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
      <button onClick={() => navigate(-1)} className="mb-6 text-blue-700 hover:underline">&larr; Back</button>
      <h2 className="text-3xl font-bold text-blue-900 mb-2">{product.name}</h2>
      <p className="text-blue-700 mb-6">{product.price}</p>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 md:gap-4 mb-2 md:mb-0 justify-center md:justify-start">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className={`w-16 h-16 sm:w-20 sm:h-20 object-contain rounded border cursor-pointer transition ${selected === i ? "border-blue-700 ring-2 ring-blue-300" : "border-gray-200"}`}
              onClick={() => setSelected(i)}
            />
          ))}
        </div>
        {/* Main Image */}
        <div className="flex-1 flex items-center justify-center bg-white rounded shadow min-h-[200px] sm:min-h-[350px]">
          <img
            src={images[selected]}
            alt={`Product ${product.name}`}
            className="max-h-[220px] sm:max-h-[400px] max-w-full object-contain"
          />
        </div>
      </div>
      {/* Optionally, add more product details here */}
    </div>
  );
};

export default ProductPage; 