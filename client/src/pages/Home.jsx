import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <div className="bg-neutral min-h-screen">
      <header className="text-center py-8 bg-green-50">
        <h1 className="text-3xl font-heading text-primary">EcoWorldBuy</h1>
        <p className="text-accent mt-2">Planet-positive products, for everyone.</p>
      </header>
      <ProductGrid />
    </div>
  );
};

export default Home;