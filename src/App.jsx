import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Body from './Pages/Body';
import Footer from './Component/Footer';
import Register from './Pages/Register';
import BookStore from './Pages/BookStore';

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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
