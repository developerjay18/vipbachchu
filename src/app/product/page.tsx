// pages/products.tsx
// Products page
"use client";

// imports
import React, { useEffect, useState } from 'react';
import ProductCard from "../components/layout/Prodctcard";
import axios from 'axios';
import Header from '../components/layout/Header';
import Slider from '../components/layout/Slider';
import Footer from '../components/layout/Footer';


// Product interface
interface Product {
  ProdctId: string;
  image: string;
  title: string;
  tag: string;
  tagColor: string;
  price: number;
  highlight: string;
}

// Products page

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products
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

// sliders interface
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

// sliders data
  const slidesData: Slide[] = [
    {
      id: 1,
      image: '/Images/Bannes/M6vB29xwziv5tPQeYDm0W.webp',
      title: 'Custom Slide 1',
      description: 'Sale upto 50% off',
    },
    {
      id: 2,
      image: '/Images/Bannes/11062b_7050648587a64464888be99c32976ec6~mv2.webp',
      title: 'Custom Slide 2',
      description: 'Sale upto 50% off',
    },
    {
      id: 3,
      image: '/Images/Bannes/lKO6Ty-lqynYSKx2QbOyx.webp',
      title: 'Custom Slide 3',
      description: 'Sale upto 50% off',
    },
    {
      id: 4,
      image: '/Images/Bannes/0iPaMo6ahGuDtEgd8_t81.webp',
      title: 'Custom Slide 4',
      description: 'Sale now',
    },
    {
      id: 5,
      image: '/Images/Bannes/markus-spiske-BTKF6G-O8fU-unsplash.jpg',
      title: 'Custom Slide 5',
      description: 'Sale',
    },
    
  ];
  



  return (
    // Main content
    <main>
       {/* Header */}
       <br />
        <Header />
        <div className="container mx-auto p-4 flex flex-wrap">

            {/* Slider */}
              <Slider slides={slidesData} />

                {/* Products */}
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
        
        {/* Footer */}
        <Footer />
    </main>
  );
};

export default ProductsPage;