"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";


const navLinks = [
  
  {
    title: "Product",
    path: "/product",
  },
  {
    title: "Credit Cards",
    path: "/creditcards",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
   
  
    // {
    //   title: "Stores",
    //   path: "/stores",
    // },
];

const dropdownLinks = [
  {
    title: "Update",
    path: "/update-hub",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
    <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <Link
        href={"/#"}
        className=" md:text-5xl text-5xl font-array bg-gradient-to-r  from-fuchsia-500 to-pink-500 bg-clip-text text-transparent font-light"
      >
        VIPBACHCHU
      
      </Link>
      <div className="mobile-menu block md:hidden">
        {!navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <Bars3Icon className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
  </nav>
  );
};

export default Header;
