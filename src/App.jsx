import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookDetails from './Pages/BookDetails';
import Header from './Component/Header';
import Body from './Pages/Body';
import Footer from './Component/Footer';
import Register from './Pages/Register';
import BookStore from './Pages/BookStore';
import Login from './Pages/Login';
import DigitalLibrary from './Pages/DigitalLibrary';
import MyDashboard from './Pages/MyDashboard';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Orders from './Pages/Orders';
import EditProfile from './Pages/EditProfile';

function App() {
  // 🛒 Cart and ❤️ Favorite state lifted up
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <>
      {/* Pass state as props to Header */}
      <Header cart={cart} favorites={favorites} />

      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/digital-library' element={<DigitalLibrary />} />
        <Route path='/my-dashboard' element={<MyDashboard />} />
        {/* Pass state + setters to BookStore */}
        <Route
          path='/book-store'
          element={
            <BookStore
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        {/* Cart Route */}
        <Route
          path='/book/:id'
          element={
            <BookDetails
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />
        {/* Checkout Route */}
        <Route
          path='/checkout'
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
            />
          }
        />
        {/* Orders Route */}
        <Route
          path='/orders'
          element={<Orders />}
        />
        {/* Edit Profile Route */}
        <Route
          path='/edit-profile'
          element={<EditProfile />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
