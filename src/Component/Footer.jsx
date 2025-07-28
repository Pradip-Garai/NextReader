import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Brand Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          NEXTREAD
          </h1>
          <p className="text-gray-300 mt-2">
            Your ultimate destination for academic books and digital learning resources.
          </p>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Science & Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Mathematics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Literature</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Business</a></li>
            </ul>
          </div>

          {/* Contact Info - Now in the third column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>support@nextreader.com</p>
              <p>+1 (555) 123-4567</p>
              <p>123 Education Street, Learning City</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} NEXTREADER. All rights reserved. Made for students and professionals worldwide.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;