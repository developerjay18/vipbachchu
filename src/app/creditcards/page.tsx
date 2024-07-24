"use client";
import React from 'react';
import CardSlider from '../components/layout/CardSlider';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Slider from '../components/layout/Slider';


// Slides interface
interface Slide {
  id: number
  image: string
  title: string
  description: string
}

// Slides data
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
]





const Home: React.FC = () => {
  return (
    <main>
      <Header />
       <br /> <br />
    <Slider slides={slidesData} />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Credit Card</h1>
      <CardSlider />
    </div>
    <Footer />
    </main>
  );
};

export default Home;