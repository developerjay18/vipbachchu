// pages/products.tsx
"use client";
import React, { useEffect, useState } from 'react';
import ProductCard from "../components/layout/Prodctcard";
import axios from 'axios';

interface Product {
  ProdctId: string;
  image: string;
  title: string;
  tag: string;
  tagColor: string;
  price: number;
  highlight: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products/get-products');
        console.log('Fetched products:', response.data.data); // Debugging line
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard 
            key={product.ProdctId} 
            product={product} 
            onExplore={() => console.log('Explore clicked')} 
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductsPage;