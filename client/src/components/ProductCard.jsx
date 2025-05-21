import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-2xl border p-4 shadow-sm hover:shadow-lg transition bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-xl mb-3 h-48 w-full object-cover"
      />
      <h3 className="text-lg font-heading text-primary">{product.name}</h3>
      <button className="mt-3 px-4 py-2 border border-primary text-primary rounded-full hover:bg-green-50">
        View Product
      </button>
    </div>
  );
};

export default ProductCard;