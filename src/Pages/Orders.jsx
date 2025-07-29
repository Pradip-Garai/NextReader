import React, { useState } from 'react';
import { FiBox, FiCheckCircle, FiClock, FiChevronDown } from 'react-icons/fi';

// Mock order data
const mockOrders = [
  {
    id: 'ORD123456',
    date: '2024-06-01',
    status: 'Processing',
    items: [
      { id: 1, title: 'The Silent Patient', image: '/book1.webp', price: 24.99, quantity: 1 },
      { id: 3, title: 'Atomic Habits', image: '/book3.webp', price: 16.99, quantity: 1 },
    ],
    total: 41.98,
    isCurrent: true,
  },
  {
    id: 'ORD123455',
    date: '2024-05-20',
    status: 'Delivered',
    items: [
      { id: 2, title: 'Where the Crawdads Sing', image: '/book2.webp', price: 18.99, quantity: 1 },
    ],
    total: 18.99,
    isCurrent: false,
  },
  {
    id: 'ORD123454',
    date: '2024-05-10',
    status: 'Delivered',
    items: [
      { id: 4, title: 'Educated', image: '/book4.webp', price: 21.99, quantity: 1 },
      { id: 5, title: 'The Midnight Library', image: '/book5.webp', price: 19.99, quantity: 1 },
    ],
    total: 41.98,
    isCurrent: false,
  },
];

function Orders() {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (orderId) => {
    setShowDetails((prev) => ({ ...prev, [orderId]: !prev[orderId] }));
  };

  const currentOrders = mockOrders.filter((o) => o.isCurrent);
  const previousOrders = mockOrders.filter((o) => !o.isCurrent);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">My Orders</h2>

        {/* Current Orders */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><FiClock className="mr-2" />Current Orders</h3>
          {currentOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-gray-500 text-center">No current orders.</div>
          ) : (
            currentOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-gray-800">Order #{order.id}</span>
                    <span className="ml-4 text-gray-500 text-sm">{order.date}</span>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {order.status === 'Delivered' ? <FiCheckCircle className="mr-1" /> : <FiClock className="mr-1" />}
                    {order.status}
                  </span>
                </div>
                <button onClick={() => toggleDetails(order.id)} className="flex items-center text-blue-600 hover:underline text-sm mb-4">
                  <FiChevronDown className={`mr-1 transition-transform ${showDetails[order.id] ? 'rotate-180' : ''}`} />
                  {showDetails[order.id] ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails[order.id] && (
                  <div className="border-t pt-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center mb-3">
                        <img src={item.image} alt={item.title} className="h-12 w-12 rounded object-cover border mr-3" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-700">{item.title}</div>
                          <div className="text-gray-500 text-sm">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="flex justify-end mt-2">
                      <span className="font-bold text-lg text-gray-800">Total: ${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Previous Orders */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4 flex items-center"><FiBox className="mr-2" />Previous Orders</h3>
          {previousOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-gray-500 text-center">No previous orders.</div>
          ) : (
            previousOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-gray-800">Order #{order.id}</span>
                    <span className="ml-4 text-gray-500 text-sm">{order.date}</span>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {order.status === 'Delivered' ? <FiCheckCircle className="mr-1" /> : <FiClock className="mr-1" />}
                    {order.status}
                  </span>
                </div>
                <button onClick={() => toggleDetails(order.id)} className="flex items-center text-blue-600 hover:underline text-sm mb-4">
                  <FiChevronDown className={`mr-1 transition-transform ${showDetails[order.id] ? 'rotate-180' : ''}`} />
                  {showDetails[order.id] ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails[order.id] && (
                  <div className="border-t pt-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center mb-3">
                        <img src={item.image} alt={item.title} className="h-12 w-12 rounded object-cover border mr-3" />
                        <div className="flex-1">
                          <div className="font-medium text-gray-700">{item.title}</div>
                          <div className="text-gray-500 text-sm">Qty: {item.quantity}</div>
                        </div>
                        <div className="text-gray-800 font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                    <div className="flex justify-end mt-2">
                      <span className="font-bold text-lg text-gray-800">Total: ${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders; 