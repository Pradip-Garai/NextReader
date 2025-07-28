import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 h-20">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Increased size from h-10 w-10 to h-12 w-12 */}
            <div className="flex-shrink-0 flex items-center">
             <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
               <img src='/NextRead.png' style={{height:"70px",width:"100px", marginTop:"10px"}}/>
             </h1>
            </div>

            {/* Centered Navigation Links */}
            <div className="flex items-center justify-center flex-1 mx-10">
              <div className="flex space-x-8">
                <a href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-600">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-600">
                  Books Store
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-600">
                  Digital Library
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-blue-600">
                  My Dashboard
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              {/* Search Bar */}
              <div className="flex items-center relative">
                <svg className="w-4 h-4 text-gray-400 absolute left-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input 
                  type="text" 
                  placeholder="Search books, authors..." 
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 w-80 text-sm text-gray-600"
                />
              </div>

              <div className="flex items-center space-x-4">
                
                  
                    <button className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
                      Login
                    </button>
                  
              
                <Link to="/register">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-md transition-colors duration-200 shadow-sm">
                      Sign Up
                    </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobail view  */} 
       {/* Mobile Layout */}
<div className="lg:hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center">
        <img src='/NextRead.png' style={{height:"70px",width:"100px", marginTop:"10px"}}/>
      </div>

      {/* Mobile Icons */}
      <div className="flex items-center space-x-4">
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

    {/* Mobile Search - appears below the header */}
    {showMobileSearch && (
      <div className="absolute left-0 right-0 bg-white z-50 px-6 py-3 mt-[10px] shadow-md">
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

    {/* Mobile Menu - appears below the header (or below search if active) */}
    {isMenuOpen && (
      <div className="absolute left-0 right-0 bg-white z-40 px-6 py-4 shadow-lg mt-1">
        <div className="space-y-2">
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">
            Home
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">
            Books Store
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">
            Digital Library
          </a>
          <a href="#" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded-md">
            My Dashboard
          </a>
          <div className="pt-2 border-t border-gray-200 space-y-2">
            <button className="w-full py-2 px-4 text-left text-gray-700 hover:bg-gray-50 rounded-md">
              Login
            </button>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
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