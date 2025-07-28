import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Body from './Pages/Body';
import Footer from './Component/Footer';
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
