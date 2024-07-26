'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CgTwitter, CgFacebook, CgInstagram } from 'react-icons/cg';
const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer border-t border-gray-700 text-white bg-[#121212] bg-opacity-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href={"/home"}
        className="text-5xl font-array bg-gradient-to-r  from-fuchsia-500 to-pink-500 bg-clip-text text-transparent"
      >

        VIPBACHCHU

      </Link>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/contact-us" className="text-gray-400 hover:text-white">Contact</Link>
            {/* <Link href="/subscribe" className="text-gray-400 hover:text-white">Subscribe</Link> */}
            <Link target='_blank' href="/privacy-hub" className="text-gray-400 hover:text-white">Privacy Hub</Link>
            {/* <Link href="/cookie-settings" className="text-gray-400 hover:text-white">Cookie Policy</Link> */}
            <Link target='_blank' href="/update-hub" className="text-gray-400 hover:text-white">Update Hub</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="https://twitter.com">
              <CgTwitter className="text-gray-400 hover:text-white text-2xl" />
            </Link>
            <Link href="https://instagram.com">
              <CgInstagram className="text-gray-400 hover:text-white text-2xl" />
            </Link>
            <Link href="https://facebook.com">
              <CgFacebook className="text-gray-400 hover:text-white text-2xl" />
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-lg font-semibold">Developed by Akshar Patel</p>
            <p className="text-gray-500">© {currentYear} | VIPBACHCHU - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
