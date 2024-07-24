'use client';
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Slider from './components/layout/Slider';
import axios from "axios";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface Product {
  productId: string;
  imageUrl: string;
  name: string;
  tag: string;
  tagColor: string;
  regularPrice: number;
  highlight: string;
  affiliateUrl: string;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/products');
        console.log(response.data);
        console.log(response.data.data);
        setProductData(response.data.data);
      } catch (error) {
        console.log('ERROR WHILE FETCHING PRODUCTS ON FRONTEND', error);
      }
    };
    fetchData();
  }, []);

  const handleExplore = (e: React.MouseEvent, affiliateUrl: string) => {
    e.stopPropagation();
    e.preventDefault();
    // Open the affiliate URL in a new tab
    window.open(affiliateUrl, '_blank');
  };

  return (
    <main>
      <Header />
      <br /><br />
      <Slider slides={slidesData} />
      <div className="">
        {ProductData.length > 0 ? (
          <div className="flex justify-center flex-wrap">
            {ProductData.map((item, index) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                key={`product-${index + 1}`}
              >
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                  onClick={(e) => handleExplore(e, item.affiliateUrl)}
                >
                  <Image
                    src={item.imageUrl || ''}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover text-black"
                  />
                  <div className="p-6">
                    <div className="mb-4">
                      <span
                        className={`bg-${item.tagColor}-200 text-${item.tagColor}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded text-black`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-lg text-black font-semibold mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-4">${item.regularPrice}</p>
                    <p className="text-gray-800 mb-4">{item.highlight}</p>
                    <button
                      onClick={(e) => handleExplore(e, item.affiliateUrl)}
                      className="text-sm font-semibold text-indigo-500 hover:text-indigo-600 flex items-center space-x-1 transition duration-300 ease-in-out group"
                    >
                      <span>Explore</span>
                      <span className="transform transition-transform duration-300 group-hover:-rotate-45 ease-in-out text-black">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="loader"></div>
        )}
      </div>
      <Footer />
    </main>
  );
}

export default Home;
