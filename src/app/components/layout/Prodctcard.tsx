// components/Product/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }: any) => {
  const handleExplore = () => {
    // Navigate to the affiliate link
    window.location.href = product.affiliateUrl;
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
          <div className="relative w-full h-48">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
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
              onClick={handleExplore}
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-600 flex items-center space-x-1 transition duration-300 ease-in-out group"
            >
              <span>Explore</span>
              <span className="transform transition-transform duration-300 group-hover:-rotate-45 ease-in-out text-black">→</span>
            </button>
          </div>
        </div>
   
    </div>
  );
};

export default ProductCard;
