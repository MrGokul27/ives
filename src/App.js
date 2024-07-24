import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
