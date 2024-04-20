import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { HiUser, HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg w-full ">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-black text-lg font-semibold">Karo Abhyaas</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="bg-black text-white p-3">Join Us</Link> {/* Change anchor tag to Link */}
            <Link to="/classes" className="text-black-300">Classes</Link>
            <Link to="/products" className="text-black-300">Products</Link>
            <Link to="/about"  className="text-black-300">About Us</Link>
            <a href="#" className="text-black-300"><HiUser /></a>
            <a href="#" className="text-black-300"><HiShoppingCart /></a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black-800">
          <div className="px-2 py-3 space-y-1 sm:px-3">
          <Link to="/about" className="text-black-300 block">Join us</Link>
          <Link to="/classes" className="text-black-300 block">Classes</Link>
          <Link to="/products" className="text-black-300 block">Products</Link>
          <Link to="/about" className="text-black-300 block">About Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
