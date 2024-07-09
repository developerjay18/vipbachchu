// components/Product/ProductCard.tsx
import React from 'react';
import Image from 'next/image';

interface Product {
  image: string;
  title: string;
  tag: string;
  tagColor: string;
  price: number;
  highlight: string;
}

interface ProductCardProps {
  product: Product;
  onExplore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onExplore }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="mb-4">
          <span className={`bg-${product.tagColor}-200 text-${product.tagColor}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}>
            {product.tag}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price}</p>
        <p className="text-gray-800 mb-4">{product.highlight}</p>
        <button
          onClick={onExplore}
          className="text-sm font-semibold text-indigo-500 hover:text-indigo-600 flex items-center space-x-1 transition duration-300 ease-in-out"
        >
          <span>Explore</span>
          <span className="transform rotate-45">→</span>
        </button>
      </div>
    </div>
  </div>
);
};


export default ProductCard;