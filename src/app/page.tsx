'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ProductCard from './components/layout/Prodctcard';
import Slider from './components/layout/Slider';
import { useRouter } from 'next/navigation'

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Product {
  ProdctId: string;
  image: string;
  title: string;
  tag: string;
  tagColor: string;
  price: number;
  highlight: string;
}

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

const Home: React.FC = () => {
  const [ProductData, setProductData] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();

        if (Array.isArray(data)) {
          setProductData(data);
        } else {
          console.error('API response is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  const handleExplore = (productId: string) => {
    // Navigate to product detail page
    router.push(`/products/${productId}`);
  };

  return (
    <main>
      <Header />
      <br />
      <Slider slides={slidesData} />
      <div className="flex flex-wrap">
        {ProductData.map((product) => (
          <ProductCard key={product.ProdctId} product={product} onExplore={() => handleExplore(product.ProdctId)} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
