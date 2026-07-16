import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;