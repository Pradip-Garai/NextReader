import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

function Body() {
  const categories = [
    { logo: '/Science-Logo.png', full: 'Science' },
    { logo: '/tech-logo.jpg', full: 'Technology' },
    { logo: '/math-logo.webp', full: 'Mathematics' },
    { logo: '/literature-logo.jpg', full: 'Literature' },
    { logo: '/history-logo.jpg', full: 'History' },
    { logo: '/business-logo.jpg', full: 'Business' },
    { logo: '/computer-logo.jpg', full: 'Computers' },
    { logo: '/story-logo.webp', full: 'Stories' },
  ];

  const books = [
    {
      title: "Advanced Mathematics",
      author: "Dr. Sarah Johnson",
      price: "$45.99",
      image: "/book1.webp",
      type: "Physical"
    },
    {
      title: "Computer Science Fundamentals",
      author: "Michael Chen",
      price: "Free",
      image: "/book3.webp",
      type: "Physical"
    },
    {
      title: "Modern Physics",
      author: "Prof. David Wilson",
      price: "$2.99/month",
      image: "/book2.webp",
      type: "Digital"
    },
    {
      title: "Business Strategy",
      author: "Emma Thompson",
      price: "$29.99",
      image: "/book4.webp",
      type: "Physical"
    },
    {
      title: "Social Studies Textbook",
      author: "Various Authors",
      price: "$19.99",
      image: "/book5.webp",
      type: "Physical"
    },
    {
      title: "Advanced Mathematics",
      author: "Dr. Sarah Johnson",
      price: "$45.99",
      image: "/book1.webp",
      type: "Physical"
    },
    {
      title: "Computer Science Fundamentals",
      author: "Michael Chen",
      price: "Free",
      image: "/book3.webp",
      type: "Physical"
    },
    {
      title: "Modern Physics",
      author: "Prof. David Wilson",
      price: "$2.99/month",
      image: "/book2.webp",
      type: "Digital"
    },
    {
      title: "Business Strategy",
      author: "Emma Thompson",
      price: "$29.99",
      image: "/book4.webp",
      type: "Physical"
    },
    {
      title: "Social Studies Textbook",
      author: "Various Authors",
      price: "$19.99",
      image: "/book5.webp",
      type: "Physical"
    },
    {
      title: "Social Studies Textbook",
      author: "Various Authors",
      price: "$19.99",
      image: "/book5.webp",
      type: "Physical"
    },
    {
      title: "Social Studies Textbook",
      author: "Various Authors",
      price: "$19.99",
      image: "/book5.webp",
      type: "Physical"
    }
  ];

  // Stats section implementation
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (statsInView) {
      setHasAnimated(true);
    }
  }, [statsInView]);

  const stats = [
    { number: 10000, label: "Books Available", suffix: "+" },
    { number: 5000, label: "Happy Students", suffix: "+" },
    { number: 500, label: "Free Resources", suffix: "+" },
    { number: 24, label: "Access Support", suffix: "/7" }
  ];

  return (
    <>
      {/* Hero Banner Section */}
      <div 
        className="min-h-[295px] md:min-h-[395px] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="text-center max-w-2xl mx-auto p-4 md:p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            Discover Your Next Great Read
          </h1>
          <p className="text-base md:text-xl mb-6 md:mb-8 leading-relaxed">
            Access thousands of books - buy<br className="md:hidden" />
            physical copies, read digital versions<br className="md:hidden" />
            or reuse premium content.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-lg">
              Explore Books Store
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 md:py-3 px-4 md:px-6 border-2 border-white rounded-lg text-base md:text-lg">
              Digital Library
            </button>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Books Category</h2>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
              <div className="flex space-x-8">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-all transform hover:-translate-y-1"
                    style={{ 
                      minWidth: '120px',
                      background: `linear-gradient(135deg, ${getCategoryColor(index).from} 0%, ${getCategoryColor(index).to} 100%)`
                    }}
                  >
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={category.logo} 
                        alt={category.full}
                        style={{ height: "97px", width: "100px", borderRadius: "50%" }} 
                      />
                    </div>
                    <span className="text-sm font-medium text-white">{category.full}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Curated Highlights</h1>
          <p className="text-gray-600">Handpicked Favorites from Our Collection</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                {/* Book Cover */}
                <div className="h-48 bg-gray-50 flex items-center justify-center p-1">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="h-full object-contain"
                    style={{ height: "200px", width: "300px" }}
                  />
                </div>
                
                {/* Book Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                    book.type === "Physical" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-purple-100 text-purple-800"
                  }`}>
                    {book.type}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-xs ml-1">(24)</span>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-lg font-bold ${
                        book.price === "Free" 
                          ? "text-green-600" 
                          : "text-gray-900"
                      }`}>
                        {book.price}
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Store and Library Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Explore an Expansive Selection in Our Store and Library</h1>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Physical Books Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img src='/Cart.png' className="h-8 w-8" />
                  <h2 className="text-2xl font-bold text-gray-800">Physical Books Store</h2>
                </div>
                <p className="text-gray-600 mb-6">Order printed books with home delivery</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Wide selection of textbooks and references</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fast home delivery service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Competitive pricing for students</span>
                  </li>
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                  Browse Physical Books
                </button>
              </div>
            </div>

            {/* Digital Library Card */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-gray-100">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img src='/tablet.png' className="h-8 w-8" />
                  <h2 className="text-2xl font-bold text-gray-800">Digital Library</h2>
                </div>
                <p className="text-gray-600 mb-6">Read and download digital books instantly</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free books available for download</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium content with rental options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Instant access from any device</span>
                  </li>
                </ul>
                
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                  Explore Digital Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Statistics Section */}
      <div ref={statsRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {hasAnimated ? (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix}
                      separator=","
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-md md:text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Helper function to generate category colors
function getCategoryColor(index) {
  const colors = [
    { from: '#3b82f6', to: '#93c5fd' }, // blue
    { from: '#10b981', to: '#6ee7b7' }, // emerald
    { from: '#f59e0b', to: '#fcd34d' }, // amber
    { from: '#ef4444', to: '#fca5a5' }, // red
    { from: '#8b5cf6', to: '#c4b5fd' }, // violet
    { from: '#ec4899', to: '#f9a8d4' }, // pink
    { from: '#14b8a6', to: '#5eead4' }, // teal
    { from: '#f97316', to: '#fdba74' }  // orange
  ];
  return colors[index % colors.length];
}

export default Body;