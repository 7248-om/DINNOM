import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './pages/Login';
import React, { useEffect, useState } from 'react';
import Wishlist from './components/wishlist';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Men from "./pages/Men";
import Women from './pages/Women';
import WomenDresses from './pages/WomenDresses';
import WomenTeesTops from './pages/WomenTeesTops';
import WomenPants from './pages/WomenPants';
import WomenHoodies from './pages/WomenHoodies';
import WomenFootwear from './pages/WomenFootwear';
import WomenCapsAccessories from './pages/WomenCapsAccessories';
import MenShirtTShirtPolos from './pages/MenShirtTShirtPolos';
import MenPantsShorts from './pages/MenPantsShorts';
import MenHoodies from './pages/MenHoodies';
import AdminDashboard from './pages/admin';

import Intro from './components/Intro';
import BrandImageSection from './components/BrandBannerFooter';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    fetch('http://localhost:5050/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Winners:', data);
      });
  }, []);

  // Lock scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
  }, [sidebarOpen]);

  return (
    <>
      <CustomCursor />
      <Intro />

      {/* Always visible */}
      <Navbar toggleSidebar={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main content behind sidebar */}
      <main className="pt-24 px-4 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/login"
            element={
              <div className="px-4">
                <Login />
              </div>
            }
          />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men/shirts" element={<MenShirtTShirtPolos />} />
          <Route path="/men/pants" element={<MenPantsShorts />} />
          <Route path="/men/sweatshirts" element={<MenHoodies />} />
          <Route path="/men/footwear" element={<div>Men Footwear Page</div>} />
          <Route path="/men/cap" element={<div>Men Cap Page</div>} />
          <Route path="/women/dresses" element={<WomenDresses />} />
          <Route path="/women/tops" element={<WomenTeesTops />} />
          <Route path="/women/pants" element={<WomenPants />} />
          <Route path="/women/sweatshirts" element={<WomenHoodies />} />
          <Route path="/women/footwear" element={<WomenFootwear />} />
          <Route path="/women/cap" element={<WomenCapsAccessories />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </main>

      {/* Brand Banner Only on Home */}
      {isHome && <BrandImageSection />}
    </>
  );
}

// Wrap with BrowserRouter
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
}
