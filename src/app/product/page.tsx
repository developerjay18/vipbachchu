'use client';

// Importing modules
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

// Importing components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Headerimage from '../components/share/Headerimage';



// Product interface
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



const ProductsPage: React.FC = () => {
  const [ProductData, setProductData] = useState<Product[]>([]);
  const router = useRouter();

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
    // Prevent the Link click event from being triggered
    e.stopPropagation();
    e.preventDefault();
    // Navigate to the affiliate URL
    window.open(affiliateUrl, '_blank');
  };

  return (
    <main>
      <Header />
      <br /> <br /> <br /> <br />
      <Headerimage 
        backgroundImageUrl="https://images.unsplash.com/photo-1663435504751-6b84ea6db681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnxnc2VuTmdrUDhFUXx8ZW58MHx8fHx8" 
        text="Products" />
      <div className="">
        {ProductData.length > 0 ? (
          <div className="flex justify-center flex-wrap">
            {ProductData.map((item, index) => (
              <div
                className="w-full md:w-1/2 lg:w-1/3 p-4"
                key={`product-${index + 1}`}
              >
                
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer"
                  onClick={(e) => handleExplore(e, item.affiliateUrl)}>
                     
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
                      <p className="text-gray-600 mb-4">₹{item.regularPrice}</p>
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
};

export default ProductsPage;
