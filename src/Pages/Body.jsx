import React from 'react';

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

  return (
    <>
      <div 
        className="min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-cover bg-center text-white"
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
              Explore Books
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-2 md:py-3 px-4 md:px-6 border-2 border-white rounded-lg text-base md:text-lg">
              Digital Library
            </button>
          </div>
        </div>
      </div>

      {/* Category Section with Horizontal Scroll */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Books Category</h2>
          </div>

          {/* Horizontal Scroll Container */}
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

      {/* Feature Books Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div 
                key={index} 
                className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  background: book.type === "Physical" 
                    ? "linear-gradient(to bottom, #f0f9ff 0%, #e0f2fe 100%)" 
                    : "linear-gradient(to bottom, #f5f3ff 0%, #ede9fe 100%)"
                }}
              >
                {/* Book Cover */}
                <div className="h-48 flex items-center justify-center p-1 bg-white/50">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="h-full object-contain"
                    style={{ height: "200px", width: "300px" }}
                  />
                </div>
                
                {/* Book Details */}
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                    book.type === "Physical" 
                      ? "bg-blue-100 text-blue-800" 
                      : "bg-purple-100 text-purple-800"
                  }`}>
                    {book.type}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                  <p className="text-gray-600 mb-3">{book.author}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-lg font-bold ${
                      book.price === "Free" 
                        ? "text-green-600" 
                        : "text-gray-900"
                    }`}>
                      {book.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Explore Books Store and Digital Library Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Physical Books Card */}
            <div 
              className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
                borderLeft: "4px solid #0ea5e9"
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img src='/Cart.png' className="h-8 w-8" />
                  <h2 className="text-2xl font-bold text-gray-800">Physical Books Store</h2>
                </div>
                <p className="text-gray-700 mb-6">Order printed books with home delivery</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Wide selection of textbooks and references</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Fast home delivery service</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div 
              className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
                borderLeft: "4px solid #8b5cf6"
              }}
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <img src='/tablet.png' className="h-8 w-8" />
                  <h2 className="text-2xl font-bold text-gray-800">Digital Library</h2>
                </div>
                <p className="text-gray-700 mb-6">Read and download digital books instantly</p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Free books available for download</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Premium content with rental options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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