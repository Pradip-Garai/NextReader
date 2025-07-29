import React, { useState } from 'react';
import { FiUser, FiShoppingCart, FiHeart, FiDownload, FiBookOpen, FiEdit, FiArrowRight } from 'react-icons/fi';

const mockUser = {
  name: 'John Doe',
  avatar: '', // Placeholder for profile image
};

const mockStats = {
  cart: 2,
  favorites: 4,
  downloads: 3,
  orders: 1,
};

const mockRecent = [
  { id: 1, title: 'Deep Learning with Python', type: 'Digital', image: '/book1.webp', action: 'Download again' },
  { id: 2, title: 'The Silent Patient', type: 'Physical', image: '/book2.webp', action: 'Buy again' },
];

const mockFavorites = [
  { id: 1, title: 'Atomic Habits', image: '/book3.webp' },
  { id: 2, title: 'Clean Code', image: '/book4.webp' },
  { id: 3, title: 'The Pragmatic Programmer', image: '/book2.webp' },
  { id: 4, title: 'The Midnight Library', image: '/book5.webp' },
];

const mockDownloads = [
  { id: 1, title: 'Deep Learning with Python', image: '/book1.webp', url: '/pdfs/deep-learning-with-python.pdf' },
  { id: 2, title: 'Atomic Habits (Digital)', image: '/book3.webp', url: '/pdfs/atomic-habits.pdf' },
  { id: 3, title: 'Clean Code', image: '/book4.webp', url: '/pdfs/clean-code.pdf' },
];

const mockRecommendations = [
  { id: 1, title: 'Project Hail Mary', image: '/book2.webp' },
  { id: 2, title: 'Educated', image: '/book4.webp' },
];

function MyDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Greeting & Profile */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
            {mockUser.avatar ? (
              <img src={mockUser.avatar} alt="Profile" className="h-full w-full rounded-full object-cover" />
            ) : (
              <FiUser />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Welcome, {mockUser.name}!</h2>
            <p className="text-gray-600">Here’s your dashboard overview.</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <FiShoppingCart className="text-blue-500 text-2xl mb-1" />
            <span className="text-lg font-bold">{mockStats.cart}</span>
            <span className="text-gray-500 text-sm">In Cart</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <FiHeart className="text-pink-500 text-2xl mb-1" />
            <span className="text-lg font-bold">{mockStats.favorites}</span>
            <span className="text-gray-500 text-sm">Favorites</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <FiDownload className="text-green-500 text-2xl mb-1" />
            <span className="text-lg font-bold">{mockStats.downloads}</span>
            <span className="text-gray-500 text-sm">Downloads</span>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <FiBookOpen className="text-yellow-500 text-2xl mb-1" />
            <span className="text-lg font-bold">{mockStats.orders}</span>
            <span className="text-gray-500 text-sm">Orders</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a href="/book-store" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            <FiBookOpen className="mr-2" /> Browse Book Store
          </a>
          <a href="/digital-library" className="flex items-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            <FiDownload className="mr-2" /> Digital Library
          </a>
          <a href="/cart" className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition">
            <FiShoppingCart className="mr-2" /> View Cart
          </a>
          <a href="/orders" className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition">
            <FiShoppingCart className="mr-2" /> View Orders
          </a>
          <a href="/edit-profile" className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition"> <FiEdit className="mr-2" /> Edit Profile</a>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Recent Activity</h3>
            {mockRecent.length === 0 ? (
              <p className="text-gray-500">No recent activity.</p>
            ) : (
              <ul className="space-y-4">
                {mockRecent.map(item => (
                  <li key={item.id} className="flex items-center space-x-4">
                    <img src={item.image} alt={item.title} className="h-12 w-12 rounded object-cover border" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-700">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.type}</div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:underline text-sm">
                      {item.action} <FiArrowRight className="ml-1" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Favorites */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Favorites</h3>
            {mockFavorites.length === 0 ? (
              <p className="text-gray-500">No favorites yet.</p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {mockFavorites.map(book => (
                  <div key={book.id} className="flex items-center space-x-3">
                    <img src={book.image} alt={book.title} className="h-10 w-10 rounded object-cover border" />
                    <span className="font-medium text-gray-700 text-sm">{book.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Digital Downloads */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Digital Downloads</h3>
            {mockDownloads.length === 0 ? (
              <p className="text-gray-500">No downloads yet.</p>
            ) : (
              <ul className="space-y-4">
                {mockDownloads.map(book => (
                  <li key={book.id} className="flex items-center space-x-4">
                    <img src={book.image} alt={book.title} className="h-10 w-10 rounded object-cover border" />
                    <span className="flex-1 font-medium text-gray-700 text-sm">{book.title}</span>
                    <a href={book.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:underline text-sm">
                      <FiDownload className="mr-1" /> Download
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Recommended for You</h3>
            {mockRecommendations.length === 0 ? (
              <p className="text-gray-500">No recommendations at this time.</p>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {mockRecommendations.map(book => (
                  <div key={book.id} className="flex items-center space-x-3">
                    <img src={book.image} alt={book.title} className="h-10 w-10 rounded object-cover border" />
                    <span className="font-medium text-gray-700 text-sm">{book.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyDashboard; 