import React, { useEffect, useState } from 'react';
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!backendUrl) {
      setError('Backend URL is not defined. Check your .env file.');
      return;
    }

    fetch(`${backendUrl}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err.message);
        setError('Could not load products. Please try again later.');
      });
  }, []);

  if (error) return <div className="text-red-600 text-center mt-4">{error}</div>;

  return (
    <section className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="rounded-2xl border border-green-500 p-4 shadow hover:shadow-lg transition duration-300"
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl"
          />
          <h2 className="mt-2 font-semibold text-lg text-[#4CAF50]">{product.name}</h2>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="font-bold text-[#2196F3] mt-2">${product.price}</p>
          <button className="mt-3 border border-green-600 text-green-600 px-4 py-1 rounded-full hover:bg-green-100 transition">
            Add to Cart
          </button>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;
