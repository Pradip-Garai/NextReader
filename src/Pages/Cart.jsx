import React, { useState } from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

// Mock book data for lookup (should match BookStore IDs)
const bookData = [
  { id: 1, title: 'The Silent Patient', author: 'Alex Michaelides', price: 24.99, image: '/book1.webp' },
  { id: 2, title: 'Where the Crawdads Sing', author: 'Delia Owens', price: 18.99, image: '/book2.webp' },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', price: 16.99, image: '/book3.webp' },
  { id: 4, title: 'Educated', author: 'Tara Westover', price: 21.99, image: '/book4.webp' },
  { id: 5, title: 'The Midnight Library', author: 'Matt Haig', price: 19.99, image: '/book5.webp' },
  { id: 6, title: 'Project Hail Mary', author: 'Andy Weir', price: 26.99, image: '/book2.webp' },
];

function Cart({ cart, setCart }) {
  // Quantity state for each book
  const [quantities, setQuantities] = useState(() => {
    const q = {};
    cart.forEach(id => { q[id] = 1; });
    return q;
  });

  // Get book details for items in cart
  const cartItems = cart.map(id => bookData.find(book => book.id === id)).filter(Boolean);

  // Calculate total
  const total = cartItems.reduce((sum, book) => sum + book.price * (quantities[book.id] || 1), 0);

  // Remove item from cart
  const handleRemove = (id) => {
    setCart(cart.filter(itemId => itemId !== id));
    setQuantities(q => { const copy = { ...q }; delete copy[id]; return copy; });
  };

  // Change quantity
  const handleQuantity = (id, delta) => {
    setQuantities(q => {
      const newQty = Math.max(1, (q[id] || 1) + delta);
      return { ...q, [id]: newQty };
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <a href="/book-store" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Go to Book Store</a>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cartItems.map(book => (
                <div key={book.id} className="flex items-center bg-white rounded-lg shadow p-4 gap-4">
                  <img src={book.image} alt={book.title} className="h-20 w-20 rounded object-cover border" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-lg">{book.title}</div>
                    <div className="text-gray-500 text-sm mb-2">by {book.author}</div>
                    <div className="text-blue-600 font-bold text-lg">${book.price.toFixed(2)}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleQuantity(book.id, -1)} className="p-1 rounded border hover:bg-gray-100"><FiMinus /></button>
                    <span className="px-3 text-lg font-medium">{quantities[book.id] || 1}</span>
                    <button onClick={() => handleQuantity(book.id, 1)} className="p-1 rounded border hover:bg-gray-100"><FiPlus /></button>
                  </div>
                  <div className="w-24 text-right font-semibold text-gray-700">
                    ${(book.price * (quantities[book.id] || 1)).toFixed(2)}
                  </div>
                  <button onClick={() => handleRemove(book.id)} className="ml-4 text-red-500 hover:text-red-700">
                    <FiTrash2 className="inline-block text-xl" />
                  </button>
                </div>
              ))}
            </div>
            {/* Cart Summary */}
            <div className="bg-white rounded-lg shadow p-6 h-fit flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h3>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <a href="/checkout" className="w-full block text-center bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-semibold text-lg">Proceed to Checkout</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
