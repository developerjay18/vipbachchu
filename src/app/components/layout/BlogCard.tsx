'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const colors = [
  '#006B35', // Emerald Green
  '#B376EC', // Amethyst
  '#9E5178', // Mint Pink
  '#FF7F50',  // Coral
  '#B3B3CB',  // Lavender
  '#B717C2',  // Pink
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, description, imageUrl }) => {
  const [bgColor, setBgColor] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  const handleReadMore = () => {
    router.push(`/blog/${id}`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden" style={{ backgroundColor: bgColor }}>
        {/* Left side - Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            className="object-cover w-full h-full"
            src={imageUrl}
            alt={title}
            layout="fill"
          />
        </div>
        {/* Right side - Content */}
        <div className="p-8 w-full md:w-1/2">
          <div className="text-gray-200 text-sm font-bold uppercase mb-2">Featured</div>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-200 mb-4">{description}</p>
          <button 
            onClick={handleReadMore}
            className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
