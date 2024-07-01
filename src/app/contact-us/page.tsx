'use client';
import React from 'react';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-8">Let's Get in Touch</h1>
      <div className="flex flex-row bg-gray-900 shadow-lg rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-2/3">
        {/* Left side - Contact Form */}
        <div className="p-8 w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-7">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows={4}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2">
          <Image
            className="object-cover w-full h-full"
            src="/Images/ContactUs.jpg"
            alt="Contact Us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
