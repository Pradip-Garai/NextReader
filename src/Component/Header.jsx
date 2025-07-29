import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

function Header({ cart, favorites }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const location = useLocation();

  // Helper for active nav
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 h-20 shadow-sm">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img src="/NextRead.png" style={{ height: '60px', width: '90px' }} alt="logo" />
              </Link>
             
            </div>

            {/* Center Navigation */}
            <div className="flex items-center flex-1 justify-center mx-8">
              <div className="flex space-x-8">
                <Link to="/" className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 ${isActive('/') ? 'border-blue-600' : 'border-transparent'}`}>Home</Link>
                <Link to="/book-store" className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 ${isActive('/book-store') ? 'border-blue-600' : 'border-transparent'}`}>Books Store</Link>
                <Link to="/digital-library" className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 ${isActive('/digital-library') ? 'border-blue-600' : 'border-transparent'}`}>Digital Library</Link>
                <Link to="/my-dashboard" className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 ${isActive('/my-dashboard') ? 'border-blue-600' : 'border-transparent'}`}>My Dashboard</Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="flex items-center relative">
                <svg className="w-4 h-4 text-gray-400 absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search books, authors..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-64 text-sm text-gray-600"
                />
              </div>

              {/* Cart Icon */}
              <Link to="/cart" className="relative flex items-center ml-2">
                <FiShoppingCart className="h-7 w-7 text-gray-700 hover:text-blue-600 transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-2 ml-2">
                <Link to="/login">
                  <button className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded transition-colors duration-200">Login</button>
                </Link>
                <Link to="/register">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md transition-colors duration-200 shadow-sm">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src="/NextRead.png" style={{ height: '48px', width: '70px' }} alt="logo" />
              </Link>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setShowMobileSearch(!showMobileSearch);
                  if (isMenuOpen) setIsMenuOpen(false);
                }}
                className={`text-gray-500 hover:text-gray-600 p-2 ${showMobileSearch ? 'text-blue-600' : ''}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
              <Link to="/cart" className="relative flex items-center">
                <FiShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  if (showMobileSearch) setShowMobileSearch(false);
                }}
                className={`text-gray-500 hover:text-gray-600 p-2 focus:outline-none ${isMenuOpen ? 'text-blue-600' : ''}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {showMobileSearch && (
            <div className="absolute left-0 right-0 bg-white z-50 px-4 py-3 mt-[10px] shadow-md">
              <div className="relative">
                <svg className="w-4 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search books, authors..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-600"
                />
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute left-0 right-0 bg-white z-40 px-4 py-4 shadow-lg mt-1">
              <div className="space-y-2">
                <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">Home</Link>
                <Link to="/book-store" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">Books Store</Link>
                <Link to="/digital-library" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">Digital Library</Link>
                <Link to="/my-dashboard" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">My Dashboard</Link>
                <div className="pt-2 space-y-2">
                  <Link to="/login">
                    <button className="w-full py-2 px-4 text-left text-gray-700 hover:bg-gray-50 rounded-md">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
