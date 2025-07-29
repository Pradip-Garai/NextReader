import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Link } from 'react-router';

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

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

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
            <Link to="/book-store">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-lg">
              Explore Books Store
            </button>
            </Link>
            <button className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] mx-auto bg-transparent hover:bg-white hover:text-black text-white font-semibold py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 border-2 border-white rounded-lg text-sm sm:text-base md:text-lg transition-all duration-200">
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
                <Link to="/book-store">
                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200">
                     Browse Physical Books
                   </button>
                </Link>
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

      {/* Contact Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              {formStatus.submitted ? (
                <div className="text-center py-8">
                  <svg className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className={`w-full py-3 px-6 rounded-lg font-medium text-white transition ${
                        formStatus.submitting
                          ? 'bg-blue-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {formStatus.submitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>

                    {formStatus.error && (
                      <div className="mt-4 text-red-600 text-sm">
                        There was an error submitting your message. Please try again.
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-8" 
              style={{
                 backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/Banner2.jpg)",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
                 backgroundRepeat: "no-repeat"
               }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 mt-[158px]">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4 " >
                    <h4 className="text-sm font-medium text-white">Phone</h4>
                    <p className="text-lg font-medium text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white">Email</h4>
                    <p className="text-lg font-medium text-white">support@bookstore.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white">Address</h4>
                    <p className="text-lg font-medium text-white">123 Book Street, Knowledge City</p>
                    <p className="text-lg font-medium text-white">CA 90210, United States</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-sm font-medium text-white mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-600">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-pink-600">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.597 0-2.917-.01-3.96-.058-.976-.045-1.505-.207-1.858-.344-.466-.182-.8-.398-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.047-1.055-.058-1.37-.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
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