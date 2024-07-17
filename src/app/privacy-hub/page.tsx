'use client';   
import React, { useState } from 'react';
import Image from 'next/image';

// Define types for the flags and updates
interface Flag {
  country: string;
  src: string;
}

interface Update {
  id: number;
  title: string;
  description: string;
  highlight: string;
  links: string;
}

const flags: Flag[] = [
  { country: 'India', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1280px-Flag_of_India.png' },
  { country: 'USA', src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_the_United_States.png' },
  // { country: 'UK', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png' },
  // { country: 'Canada', src: 'https://img.freepik.com/free-vector/illustration-canada-flag_53876-27114.jpg' },
  // { country: 'Australia', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/2560px-Flag_of_Australia.svg.png' },
  // { country: 'Germany', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_germany_800_480.png' },
  // { country: 'Chian', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0KbNRhx7YGPZeysNKF07Bk0Q7KP6qfz7_w&s' },
  // { country: 'Japan', src: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Japan_Flag.png' },
  // { country: 'South Korea', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png' },
  // { country: 'Thailand', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvWnaonMnwxwvHZcjYpQMHbKOmfXM9hINXA&s' },
  // { country: 'Russia', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuFXVaBEnKbpodO0cyYPr7WLyHPiUUxtlr-g&s' },
  // { country: 'Brazil', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png' },
];

const updates: Update[] = [
  {
    id: 1,
    title: 'Privacy Policy Update',
    description: 'We have updated our privacy policy to better protect your data.',
    highlight: 'Key changes in data handling and user rights.',
    links: '#privacy-policy-update',
  },
  {
    id: 2,
    title: 'New Data Protection Measures',
    description: 'Introducing new measures to secure user data.',
    highlight: 'Enhanced encryption and secure storage.',
    links: '#data-protection-measures',
  },
  // Add more updates as needed
];

const PrivacyHub: React.FC = () => {
  const [activeUpdate, setActiveUpdate] = useState<number | null>(null);

  const handleClick = (updateId: number) => {
    setActiveUpdate(updateId);
    const element = document.getElementById(updateId.toString());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black text-white p-8 min-h-screen rounded-lg">
      <h1 className="text-5xl font-bold mb-8">Privacy Hub</h1>
      <div className="flex space-x-4 mb-8">
        {flags.map(flag => (
          <Image key={flag.country} src={flag.src} alt={flag.country} className="w-10 h-6" />
        ))}
      </div>
      <p className="text-lm mb-4">Last updated: 2024-06-29</p>
      <p className="text-lg mb-8">
        Welcome to the Privacy Hub. Here you can find the latest updates and changes to our privacy policies and data protection measures.
      </p>
      <ul className="mb-8 justify-start">
        {updates.map(update => (
          <li key={update.id} className="mb-2 p-2 max-w-full max-h-full text-lg font-semibold cursor-pointer flex items-center justify-start transition duration-300 ease-in-out group" onClick={() => handleClick(update.id)}>
            {update.title}
            <span className="ml-2 text-white transform transition-transform duration-300 ease-in-out group-hover:rotate-45">→</span>
          </li>
          
        ))}
      </ul>
      {updates.map(update => (
        <div key={update.id} id={update.id.toString()} className="bg-[#282828] p-6 mb-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">{update.title}</h2>
          <p className="text-sm mb-2">{update.description}</p>
          <p className="text-sm mb-2">{update.highlight}</p>
          <div className="flex justify-start">
            <a
              href={update.links}
              className="p-2 max-w-52 max-h-36 text-sm font-semibold rounded-full  text-indigo-500 flex items-center justify-center transition duration-300 ease-in-out group"
            >
              Read more
              <span className="ml-2 text-white transform transition-transform duration-300 ease-in-out group-hover:-rotate-45">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PrivacyHub;
