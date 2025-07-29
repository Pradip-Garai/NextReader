import React, { useState } from 'react';
import { FiMapPin, FiUser, FiPhone, FiMail, FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const bookData = [
  { id: 1, title: 'The Silent Patient', price: 24.99, image: '/book1.webp' },
  { id: 2, title: 'Where the Crawdads Sing', price: 18.99, image: '/book2.webp' },
  { id: 3, title: 'Atomic Habits', price: 16.99, image: '/book3.webp' },
  { id: 4, title: 'Educated', price: 21.99, image: '/book4.webp' },
  { id: 5, title: 'The Midnight Library', price: 19.99, image: '/book5.webp' },
  { id: 6, title: 'Project Hail Mary', price: 26.99, image: '/book2.webp' },
];

function Checkout({ cart, setCart }) {
  const [address, setAddress] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
  });
  const [error, setError] = useState('');
  const [step, setStep] = useState(1); // 1: Address, 2: Review, 3: Payment, 4: Done

  // For demo, assume quantity 1 for each book
  const cartItems = cart.map(id => bookData.find(b => b.id === id)).filter(Boolean);
  const subtotal = cartItems.reduce((sum, book) => sum + book.price, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!address.name || !address.email || !address.phone || !address.address || !address.city || !address.pincode || !address.state) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handlePay = (e) => {
    e.preventDefault();
    setStep(3);
    // Placeholder for Razorpay integration
    setTimeout(() => setStep(4), 2000); // Simulate payment
  };

  // Step indicator
  const steps = [
    { label: 'Shipping', icon: <FiMapPin /> },
    { label: 'Review', icon: <FiChevronRight /> },
    { label: 'Payment', icon: <FiChevronRight /> },
    { label: 'Done', icon: <FiCheckCircle /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((s, i) => (
            <div key={i} className={`flex items-center ${i < step - 1 ? 'text-green-600' : i === step - 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className="flex items-center font-semibold text-lg">{s.icon}<span className="ml-1">{s.label}</span></span>
              {i < steps.length - 1 && <span className="mx-2 w-8 h-1 rounded bg-gray-200" />}
            </div>
          ))}
        </div>

        {/* Step 1: Shipping Address */}
        {step === 1 && (
          <form className="grid md:grid-cols-2 gap-8" onSubmit={handleAddressSubmit}>
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h3>
              <div className="space-y-3">
                <div className="flex items-center border rounded px-3 py-2 bg-white">
                  <FiUser className="text-gray-400 mr-2" />
                  <input type="text" name="name" placeholder="Full Name" className="w-full outline-none" value={address.name} onChange={handleChange} />
                </div>
                <div className="flex items-center border rounded px-3 py-2 bg-white">
                  <FiMail className="text-gray-400 mr-2" />
                  <input type="email" name="email" placeholder="Email" className="w-full outline-none" value={address.email} onChange={handleChange} />
                </div>
                <div className="flex items-center border rounded px-3 py-2 bg-white">
                  <FiPhone className="text-gray-400 mr-2" />
                  <input type="tel" name="phone" placeholder="Phone Number" className="w-full outline-none" value={address.phone} onChange={handleChange} />
                </div>
                <div className="flex items-center border rounded px-3 py-2 bg-white">
                  <FiMapPin className="text-gray-400 mr-2" />
                  <input type="text" name="address" placeholder="Address" className="w-full outline-none" value={address.address} onChange={handleChange} />
                </div>
                <div className="flex space-x-2">
                  <input type="text" name="city" placeholder="City" className="border rounded px-3 py-2 w-1/2 outline-none bg-white" value={address.city} onChange={handleChange} />
                  <input type="text" name="state" placeholder="State" className="border rounded px-3 py-2 w-1/2 outline-none bg-white" value={address.state} onChange={handleChange} />
                </div>
                <input type="text" name="pincode" placeholder="Pincode" className="border rounded px-3 py-2 w-full outline-none bg-white" value={address.pincode} onChange={handleChange} />
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold text-lg mt-2">Continue to Review</button>
              </div>
            </div>
            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow flex flex-col h-fit">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
              <ul className="divide-y divide-gray-200 mb-4">
                {cartItems.map(book => (
                  <li key={book.id} className="py-2 flex items-center">
                    <img src={book.image} alt={book.title} className="h-10 w-10 rounded object-cover border mr-3" />
                    <span className="flex-1 text-gray-700">{book.title}</span>
                    <span className="text-gray-800 font-semibold">${book.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-gray-700 mb-1">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </form>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Review & Confirm</h3>
              <div className="mb-4">
                <div className="font-semibold text-gray-700">Shipping Address</div>
                <div className="text-gray-600 text-sm mt-1">
                  {address.name}<br />
                  {address.address}, {address.city}, {address.state} - {address.pincode}<br />
                  {address.phone}<br />
                  {address.email}
                </div>
              </div>
              <button onClick={() => setStep(1)} className="text-blue-600 hover:underline text-sm mb-4">Edit Address</button>
              <button onClick={() => setStep(3)} className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-semibold text-lg">Proceed to Payment</button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow flex flex-col h-fit">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
              <ul className="divide-y divide-gray-200 mb-4">
                {cartItems.map(book => (
                  <li key={book.id} className="py-2 flex items-center">
                    <img src={book.image} alt={book.title} className="h-10 w-10 rounded object-cover border mr-3" />
                    <span className="flex-1 text-gray-700">{book.title}</span>
                    <span className="text-gray-800 font-semibold">${book.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between text-gray-700 mb-1">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="bg-white rounded-lg shadow p-8 w-full max-w-md flex flex-col items-center">
              <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="h-10 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pay with Razorpay (UPI)</h3>
              <div className="text-gray-600 mb-4 text-center">You will be redirected to Razorpay to complete your payment securely using UPI or other methods.</div>
              <button onClick={handlePay} className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center">
                <span>Pay Now</span>
                <FiChevronRight className="ml-2" />
              </button>
              <div className="text-green-600 text-sm font-medium mt-4">UPI payments supported via Razorpay</div>
            </div>
          </div>
        )}

        {/* Step 4: Done */}
        {step === 4 && (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="bg-white rounded-lg shadow p-8 w-full max-w-md flex flex-col items-center">
              <FiCheckCircle className="text-green-500 text-5xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h3>
              <div className="text-gray-600 mb-4 text-center">Thank you for your purchase. Your order has been placed and will be shipped soon.</div>
              <a href="/" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold text-lg text-center">Back to Home</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout; 