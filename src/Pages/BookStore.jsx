import React, { useState, useEffect } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiFilter, FiChevronDown, FiStar } from 'react-icons/fi';
import Cart from './Cart';  

const BookStore = ({ cart, setCart, favorites, setFavorites }) => {
  // Sample book data
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.jpg",
      liked: false,
      inCart: false
    },
    {
      id: 2,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 18.99,
      category: "Fiction",
      rating: 4.8,
      image: "/book2.jpg",
      liked: false,
      inCart: false
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      price: 16.99,
      category: "Self-Help",
      rating: 4.7,
      image: "/book3.jpg",
      liked: false,
      inCart: false
    },
    {
      id: 4,
      title: "Educated",
      author: "Tara Westover",
      price: 21.99,
      category: "Memoir",
      rating: 4.6,
      image: "/book4.jpg",
      liked: false,
      inCart: false
    },
    {
      id: 5,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 19.99,
      category: "Fiction",
      rating: 4.4,
      image: "/book5.jpg",
      liked: false,
      inCart: false
    },
    {
      id: 6,
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 26.99,
      category: "Science Fiction",
      rating: 4.9,
      image: "/book6.jpg",
      liked: false,
      inCart: false
    }
  ]);

  // State for filters and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [sortOption, setSortOption] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(books.map(book => book.category))];

  // Filter and sort books
  const filteredBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book => 
      selectedCategory === 'All' || book.category === selectedCategory
    )
    .filter(book => 
      book.price >= priceRange[0] && book.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch(sortOption) {
        case 'Price: Low to High':
          return a.price - b.price;
        case 'Price: High to Low':
          return b.price - a.price;
        case 'Rating':
          return b.rating - a.rating;
        case 'A-Z':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  // Toggle like status
  const toggleLike = (id) => {
  setBooks(books.map(book =>
    book.id === id ? { ...book, liked: !book.liked } : book
  ));

  if (favorites.includes(id)) {
    setFavorites(favorites.filter(item => item !== id));
  } else {
    setFavorites([...favorites, id]);
  }
};


  // Toggle cart status
  const toggleCart = (id) => {
  setBooks(books.map(book =>
    book.id === id ? { ...book, inCart: !book.inCart } : book
  ));

  if (cart.includes(id)) {
    setCart(cart.filter(item => item !== id));
  } else {
    setCart([...cart, id]);
  }
};


  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by title or author"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <FiFilter className="mr-2 h-5 w-5" />
                {sortOption}
                <FiChevronDown className="ml-2 h-5 w-5" />
              </button>

              {showFilters && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1">
                    {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'A-Z'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setShowFilters(false);
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === option ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Category and Price Filters */}
          <div className="mt-4 flex flex-wrap gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-grow">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleLike(book.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full ${book.liked ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400'} hover:bg-red-100 hover:text-red-500 transition-colors`}
                >
                  <FiHeart className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">{book.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
                  <button
                    onClick={() => toggleCart(book.id)}
                    className={`px-4 py-2 rounded-md ${book.inCart ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white'} hover:bg-blue-700 transition-colors`}
                  >
                    {book.inCart ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">No books found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookStore;