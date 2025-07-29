import React, { useState } from 'react';
import {
  FiSearch,
  FiDownload,
  FiShoppingCart,
  FiFilter,
  FiChevronDown,
  FiStar,
  FiRefreshCw
} from 'react-icons/fi';

const DigitalLibrary = ({ cart, setCart }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Deep Learning with Python",
      author: "Francois Chollet",
      price: 0.00,
      category: "Technology",
      rating: 4.8,
      image: "/book1.webp",
      isFree: true,
      pdfUrl: "/pdfs/deep-learning-with-python.pdf",
      inCart: false
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt, David Thomas",
      price: 9.99,
      category: "Programming",
      rating: 4.7,
      image: "/book2.webp",
      isFree: false,
      pdfUrl: "/pdfs/the-pragmatic-programmer.pdf",
      inCart: false
    },
    {
      id: 3,
      title: "Atomic Habits (Digital)",
      author: "James Clear",
      price: 0.00,
      category: "Self-Help",
      rating: 4.7,
      image: "/book3.webp",
      isFree: true,
      pdfUrl: "/pdfs/atomic-habits.pdf",
      inCart: false
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 7.99,
      category: "Programming",
      rating: 4.9,
      image: "/book4.webp",
      isFree: false,
      pdfUrl: "/pdfs/clean-code.pdf",
      inCart: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...new Set(books.map(book => book.category))];

  const filteredBooks = books
    .filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(book =>
      selectedCategory === 'All' || book.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'Price: Low to High': return a.price - b.price;
        case 'Price: High to Low': return b.price - a.price;
        case 'Rating': return b.rating - a.rating;
        case 'A-Z': return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

  const handleDownload = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
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

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSortOption('Featured');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Digital Library</h1>
        <p className="text-gray-600 mb-6">Browse, search, and download free and paid digital books (PDFs).</p>

        {/* Search & Filter */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
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

          {/* Category Filter */}
          <div className="mt-4 flex flex-wrap gap-4 items-end">
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
            <div key={book.id} className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="h-48 bg-gray-50 flex items-center justify-center p-1 relative">
                <img src={book.image} alt={book.title} className="h-full object-contain" />
                {book.isFree ? (
                  <span className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Free</span>
                ) : (
                  <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Paid</span>
                )}
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
                <div className="mt-auto flex justify-between items-center">
                  {book.isFree ? (
                    <button
                      onClick={() => handleDownload(book.pdfUrl)}
                      className="px-4 py-2 rounded-md text-sm bg-green-600 text-white hover:bg-green-700 flex items-center"
                    >
                      <FiDownload className="mr-2" /> Download
                    </button>
                  ) : (
                    <>
                      <span className="text-lg font-bold text-gray-900">${book.price.toFixed(2)}</span>
                      <button
                        onClick={() => toggleCart(book.id)}
                        className={`px-4 py-2 rounded-md text-sm ${book.inCart ? 'bg-green-100 text-green-800' : 'bg-blue-600 text-white'} hover:bg-blue-700 flex items-center`}
                      >
                        <FiShoppingCart className="mr-2" />
                        {book.inCart ? 'Added' : 'Buy & Download'}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900">No digital books found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DigitalLibrary; 