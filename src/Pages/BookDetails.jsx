import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart, FiStar, FiArrowLeft } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const BookDetails = ({ cart, setCart, favorites, setFavorites }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state?.book;

  if (!book) {
    return <div className="flex justify-center items-center h-screen">Book not found</div>;
  }

  const handleAddToCart = () => {
    if (!cart.find(item => item === book.id)) {
      setCart([...cart, book.id]);
    }
  };

  const handleToggleFavorite = () => {
    if (favorites.find(item => item === book.id)) {
      setFavorites(favorites.filter(item => item !== book.id));
    } else {
      setFavorites([...favorites, book.id]);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="container mx-auto px-4 py-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back to Books
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main large image */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-white">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-contain bg-gray-50 p-4"
              />
            </div>
            
            {/* Thumbnail images grid */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="rounded-md overflow-hidden border border-gray-200 cursor-pointer hover:border-indigo-500 transition-colors"
                >
                  <img
                    src={book.image}
                    alt={`${book.title} view ${index + 1}`}
                    className="w-full h-20 object-contain bg-gray-50 p-1"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
            <p className="text-xl text-gray-600">by {book.author}</p>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FiStar
                    key={index}
                    className={`w-5 h-5 ${
                      index < Math.floor(book.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({book.rating})</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-indigo-600">
                ₹{(book.price * 83).toFixed(2)}
              </div>
              <div className="text-sm text-gray-500 line-through">
                ₹{((book.price * 83) * 1.2).toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-gray-600">
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {book.category}
                </span>
              </div>
              <div className="text-gray-600">
                <h3 className="font-semibold text-gray-900 mb-2">Language</h3>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  English
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Format:</span> Hardcover
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Pages:</span> 384
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Publisher:</span> Celadon Books
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">ISBN:</span> 9781250301697
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                  cart.includes(book.id)
                    ? 'bg-green-100 text-green-800'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                <FiShoppingCart className="mr-2" />
                {cart.includes(book.id) ? 'In Cart' : 'Add to Cart'}
              </button>

              <button
                onClick={handleToggleFavorite}
                className={`flex items-center justify-center px-6 py-3 rounded-lg border transition-colors ${
                  favorites.includes(book.id)
                    ? 'bg-pink-100 border-pink-500 text-pink-500'
                    : 'border-gray-300 hover:border-pink-500 hover:text-pink-500'
                }`}
              >
                <FiHeart className="mr-2" />
                {favorites.includes(book.id) ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Additional book details can be added here */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600">
                {book.description || 'No description available for this book.'}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookDetails;
