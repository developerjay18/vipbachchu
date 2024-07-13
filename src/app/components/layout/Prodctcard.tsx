// components/Product/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  ProdctId: string;
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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleExplore = () => {
    // Navigate to product details page
    window.location.href = `/products/${product.ProdctId}`; // Directly navigate using href
    // Or use Next.js router.push for client-side navigation
    // router.push(`/products/${product.ProdctId}`);
  };
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <Link href={`/products/${product.ProdctId}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
        <Image
          src={product.image}
          alt={product.title}
          width={500} 
          height={300}
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
            onClick={handleExplore}
            className="text-sm font-semibold text-indigo-500 hover:text-indigo-600 flex items-center space-x-1 transition duration-300 ease-in-out group"
          >
            <span>Explore</span>
            <span className="  transform transition-transform duration-300 group-hover:-rotate-45 ease-in-out text-black ">→</span>
          </button>
        </div>
      </div>
      </Link>
    </div>
    
   
  );
};

export default ProductCard;
