import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiFilter,
  FiChevronDown,
  FiStar,
  FiRefreshCw
} from 'react-icons/fi';

const BookStore = ({ cart, setCart, favorites, setFavorites }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false,
      description: "A woman's act of violence against her husband and her subsequent silence render a criminal psychotherapist obsessed with uncovering her motive in this #1 New York Times bestselling psychological thriller.",
      pages: 384,
      publisher: "Celadon Books",
      isbn: "9781250301697",
      language: "English",
      format: "Hardcover"
    },
    {
      id: 2,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      price: 18.99,
      category: "Fiction",
      rating: 4.8,
      image: "/book2.webp",
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
      image: "/book3.webp",
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
      image: "/book4.webp",
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
      image: "/book5.webp",
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
      image: "/book2.webp",
      liked: false,
      inCart: false
    },
    {
      id: 7,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 8,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 9,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 10,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 11,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 12,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 13,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 14,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 15,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
    {
      id: 16,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 24.99,
      category: "Thriller",
      rating: 4.5,
      image: "/book1.webp",
      liked: false,
      inCart: false
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...new Set(books.map(book => book.category))];
  const priceRanges = [
    { label: 'Under ₹1000', min: 0, max: 1000 },
    { label: '₹1000 - ₹1500', min: 1000, max: 1500 },
    { label: '₹1500 - ₹2000', min: 1500, max: 2000 },
    { label: 'Over ₹2000', min: 2000, max: 5000 }
  ];

  const filteredBooks = books
    .filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book =>
      selectedCategory === 'All' || book.category === selectedCategory
    )
    .filter(book => {
      if (selectedPriceRanges.length === 0) return true;
      const priceInRupees = book.price * 83;
      return selectedPriceRanges.some(range => 
        priceInRupees >= range.min && priceInRupees <= range.max
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case 'Price: Low to High': return a.price - b.price;
        case 'Price: High to Low': return b.price - a.price;
        case 'Rating': return b.rating - a.rating;
        case 'A-Z': return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

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

  const togglePriceRange = (range) => {
    if (selectedPriceRanges.some(r => 
      r.min === range.min && r.max === range.max
    )) {
      setSelectedPriceRanges(selectedPriceRanges.filter(r => 
        r.min !== range.min || r.max !== range.max
      ));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedPriceRanges([]);
    setSortOption('Featured');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add custom CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Search & Filter */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by title or author"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm text-gray-700 hover:bg-gray-50"
              >
                <FiFilter className="mr-2" />
                {sortOption}
                <FiChevronDown className="ml-2" />
              </button>

              {showFilters && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md z-10 ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'A-Z'].map(option => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setShowFilters(false);
                        }}
                        className={`block px-4 py-2 text-sm w-full text-left ${sortOption === option ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Filters - Horizontal Scroll */}
          <div className="mt-4 md:hidden">
            <div className="flex space-x-4 pb-2 overflow-x-auto scrollbar-hide">
              {/* Category Dropdown */}
              <div className="flex-shrink-0">
                <select
                  id="mobile-category"
                  className="block pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filters */}
              {priceRanges.map((range, index) => (
                <div key={index} className="flex-shrink-0 flex items-center">
                  <input
                    id={`mobile-price-range-${index}`}
                    type="checkbox"
                    checked={selectedPriceRanges.some(r => 
                      r.min === range.min && r.max === range.max
                    )}
                    onChange={() => togglePriceRange(range)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor={`mobile-price-range-${index}`} className="ml-2 text-sm text-gray-700 whitespace-nowrap">
                    {range.label}
                  </label>
                </div>
              ))}

              {/* Reset Button */}
              <button
                onClick={resetAllFilters}
                className="flex-shrink-0 flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50 whitespace-nowrap"
              >
                <FiRefreshCw className="mr-1" />
                Reset
              </button>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className="mt-4 hidden md:flex flex-wrap gap-4 items-end">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                id="category"
                className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md sm:text-sm"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
              <div className="flex flex-wrap gap-3">
                {priceRanges.map((range, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      id={`price-range-${index}`}
                      type="checkbox"
                      checked={selectedPriceRanges.some(r => 
                        r.min === range.min && r.max === range.max
                      )}
                      onChange={() => togglePriceRange(range)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`price-range-${index}`} className="ml-2 text-sm text-gray-700">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetAllFilters}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              <FiRefreshCw className="mr-2" />
              Reset All
            </button>
          </div>
        </div>

        {/* Book Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map(book => (
            <div 
              key={book.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex flex-col h-full overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={(e) => {
                // Prevent navigation if clicking on buttons
                if (e.target.closest('button')) return;
                navigate(`/book/${book.id}`, { state: { book } });
              }}
            >
              {/* Image */}
              <div className="h-48 bg-gray-50 flex items-center justify-center p-1 relative">
                <img src={book.image} alt={book.title} className="h-full object-contain" />
                <button
                  onClick={() => toggleLike(book.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full ${book.liked ? 'bg-red-100 text-red-500' : 'bg-white text-gray-400'} hover:bg-red-100 hover:text-red-500`}
                >
                  <FiHeart className="h-5 w-5" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(book.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-500">{book.rating}</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-gray-900">₹{(book.price * 83).toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹{((book.price * 83) * 1.2).toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => toggleCart(book.id)}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        book.inCart 
                          ? 'bg-green-50 text-green-700 border border-green-200' 
                          : 'bg-indigo-600 text-white hover:bg-indigo-700'
                      } transition-colors`}
                    >
                      {book.inCart ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                  <div className="text-sm text-gray-500 border-t pt-2 text-center">
                    Click to view more details
                  </div>
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