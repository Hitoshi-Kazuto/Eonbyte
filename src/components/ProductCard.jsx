import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, categorySlug, productIndex }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center cursor-pointer"
      onClick={() => navigate(`/product/${categorySlug}/${productIndex}`)}
    >
      <img src={product.image || (product.images && product.images[0])} alt={product.name} className="w-32 h-32 object-contain mb-3" />
      <h3 className="text-blue-900 font-semibold text-lg mb-1">{product.name}</h3>
      <p className="text-blue-700">{product.price}</p>
    </div>
  );
};

export default ProductCard; 