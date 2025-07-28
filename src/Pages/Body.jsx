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
            Discover Your<br />Next Great Read
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
                    className="flex-shrink-0 bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow"
                    style={{ minWidth: '120px' }}
                  >
                    <div className="h-16  flex items-center justify-center mb-2">
                      <img 
                        src={category.logo} 
                        alt={category.full}
                        style={{ height: "97px", width: "100px", borderRadius: "50%" }} 
                      />
                    </div>
                    <span className="text-sm text-gray-600">{category.full}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* feature books section */}
         <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Book Cover */}
              <div className="h-48 bg-gray-100 flex items-center justify-center p-1">
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="h-full  object-contain"
                  style={{ height: "200px", width: "300px" }}
                />
              </div>
              
              {/* Book Details */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                  book.type === "Physical" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                }`}>
                  {book.type}
                </span>
                
                <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">{book.title}</h3>
                <p className="text-gray-600 mb-3">{book.author}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{book.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


     {/* explore books store and digital libery section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Physical Books Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="flex items-center gap-3">
                <img src='/Cart.png' className="h-8 w-8" />
                <h2 className="text-2xl font-bold text-gray-800">Physical Books Store</h2>
              </div>
              <p className="text-gray-600 mb-6">Order printed books with home delivery</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Wide selection of textbooks and references</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fast home delivery service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
               <div className="flex items-center gap-3">
                <img src='/tablet.png' className="h-8 w-8" />
                <h2 className="text-2xl font-bold text-gray-800">Physical Books Store</h2>
              </div>
              <p className="text-gray-600 mb-6">Read and download digital books instantly</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Free books available for download</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Premium content with rental options</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default Body;