import { BrowserRouter, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './styles/App.css';
import React, { useEffect, useState } from 'react';

// Components
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Chatbot from './components/Chatbot';
import Intro from './components/Intro';
import BrandImageSection from './components/BrandBannerFooter';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import CartProvider from './context/CartProvider';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Men from "./pages/Men";
import Women from './pages/Women';
import ProductDetails from "./pages/ProductDetail";
import Cart from './pages/Cart';
import Checkout from './pages/checkout';
import OrderSuccess from './pages/OrderSuccess';

// Women Categories
import WomenDresses from './pages/WomenDresses';
import WomenTeesTops from './pages/WomenTeesTops';
import WomenPants from './pages/WomenPants';
import WomenHoodies from './pages/WomenHoodies';
import WomenFootwear from './pages/WomenFootwear';
import WomenCapsAccessories from './pages/WomenCapsAccessories';

// Men Categories
import MenShirtTShirtPolos from './pages/MenShirtTShirtPolos';
import MenPantsShorts from './pages/MenPantsShorts';
import MenHoodies from './pages/MenHoodies';
import MenAccesories from './pages/MenAccessories';
import MenFootwear from './pages/MenFootwear';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminStats from './pages/admin/AdminStats';
import AdminOrders from './pages/admin/AdminOrders';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    fetch('http://localhost:5050/')
      .then((res) => res.text())
      .then((data) => console.log('Winners:', data));
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
  }, [sidebarOpen]);

  return (
    <>
      <CustomCursor />
      <Intro />
      <Navbar toggleSidebar={() => setSidebarOpen(true)} />
      <Chatbot />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      <main className="pt-24 px-4 bg-white">
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success/:orderId" element={<OrderSuccess />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminProducts />} /> {/* Default at /admin */}
            <Route path="products" element={<AdminProducts />} />
            <Route path="stats" element={<AdminStats />} />
            <Route path="orders" element={<AdminOrders />} />
          </Route>

          {/* Men */}
          <Route path="/men" element={<Men />} />
          <Route path="/men/shirts" element={<MenShirtTShirtPolos />} />
          <Route path="/men/pants" element={<MenPantsShorts />} />
          <Route path="/men/sweatshirts" element={<MenHoodies />} />
          <Route path="/men/accessories" element={<MenAccesories />} />
          <Route path="/men/footwear" element={<MenFootwear />} />
          <Route path="/men/cap" element={<div>Men Cap Page</div>} />

          {/* Women */}
          <Route path="/women" element={<Women />} />
          <Route path="/women/dresses" element={<WomenDresses />} />
          <Route path="/women/tops" element={<WomenTeesTops />} />
          <Route path="/women/pants" element={<WomenPants />} />
          <Route path="/women/hoodies" element={<WomenHoodies />} />
          <Route path="/women/footwear" element={<WomenFootwear />} />
          <Route path="/women/capsaccessories" element={<WomenCapsAccessories />} />

          {/* Catch-All */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </main>

      {isHome && <BrandImageSection />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
