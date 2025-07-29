import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

function Cart({ cart, favorites }) {
  return (
    <div className="flex items-center space-x-4">
      {/* Favorite Icon */}
      <div className="relative">
        <FiHeart className="h-6 w-6 text-gray-600" />
        {favorites.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </div>

      {/* Cart Icon */}
      <div className="relative">
        <FiShoppingCart className="h-6 w-6 text-gray-600" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </div>
    </div>
  );
}

export default Cart;
