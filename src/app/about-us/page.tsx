"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import Slider from '../components/layout/Slider';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Contact from '../contact-us/page';

// interfaces
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

// interfaces
interface Paragraph {
  id: number;
  story: string;
}

// sliders data
const slidesData: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1718556256225-82afc1b30580?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Slide 1',
    description: 'Custom Description 1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1708660575990-101db3b00294?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Custom Slide 2',
    description: 'Custom Description 2',
  },
];

// paragraphs data
const storyParagraphs: Paragraph[] = [
  {
    id: 1,
    story: 'Our mission is simple: to empower you with the information and resources you need to make informed decisions, save money, and seize opportunities in both online shopping and the stock market.',
  },
  {
    id: 2,
    story: 'What sets us apart is our commitment to delivering quality content and insights tailored to your needs. Our team of expert researchers scours the internet to uncover the most irresistible deals, ensuring you never miss out on a bargain. Meanwhile, our dedicated financial analysts keep a vigilant eye on market trends, providing you with timely updates and actionable advice to help you navigate the complexities of investing.',
  },
  {
    id: 3,
    story: "Whether you're a seasoned investor or a savvy shopper, vipbachchu.com is your trusted partner in maximizing value and staying ahead of the curve. Join our community today and embark on a journey towards smarter shopping and strategic investing.",
  },
  {
    id: 4,
    story: 'Thank you for choosing vipbachchu.com — where great deals meet insightful analysis.',
  },
  {
    id: 5,
    story: 'We hope you enjoy our offers and services as much as we enjoy offering them to you. If you have any questions or comments, please don\'t hesitate to contact us.',
  },
];

// AboutUs page
const AboutUs: React.FC = () => {
  useEffect(() => {
    console.log('Slides Data:', slidesData);
  }, []);

  return (
    // main container 
    <main > 
      {/* header */}
        <Header />
        <br />
        {/* slider */}
          <Slider slides={slidesData} />

        {/* About-us */}
            <div className="container mx-auto p-4">
              <div className="flex flex-col md:flex-row items-center md:items-start my-12">
                <div className="md:w-1/2 p-10">
                  <h2 className="text-2xl font-semibold">VIPBACHCHU</h2>
                  <p className="mt-4">
                    At vipbachchu.com, we're passionate about helping you navigate the digital marketplace efficiently and intelligently. Whether you're hunting for the latest gadgets, fashion trends, or seeking to stay ahead in the dynamic world of stock trading, we've got you covered.
                  </p>
                </div>
                <div className="md:w-80 p-4 relative group">
                  <Image
                    src="/Images/Raguveer.jpg"
                    alt="Founder"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-lg hover:opacity-70 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 rounded-lg">
                    <a href="https://instagram.com" className="text-white m-2">
                      <i className="fab fa-instagram"></i> Follow on Instagram
                    </a>
                    <a href="https://twitter.com" className="text-white m-2">
                      <i className="fab fa-twitter"></i> Follow on X
                    </a>
                    <a href="https://facebook.com" className="text-white m-2">
                      <i className="fab fa-facebook"></i> Follow on Facebook
                    </a>
                  </div>
                </div>
              </div>

                <div className="my-8">
                  <h2 className="text-3xl font-bold text-center">Our Story</h2>
                </div>

                  <div className="space-y-8">
                    {storyParagraphs.map(paragraph => (
                      <p key={paragraph.id} className="text-2xl leading-relaxed">
                        {paragraph.story}
                      </p>
                    ))}
                  </div>
            </div>
          {/* contact */}
          <br />
          <div className="relative overflow-hidden">
            <center>
            <h1 className='justify-center  text-6xl font-array' >Contact Us</h1>
            </center>
            
          </div>
          <br />
            <Contact />
           {/* footer */}
             <Footer />
    </main>
  );
};

export default AboutUs;
