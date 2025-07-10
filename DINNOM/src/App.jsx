import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import React, { useEffect, useState } from 'react';
import Wishlist from './components/wishlist';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Men from "./pages/Men";
import Women from './pages/Women';



import Intro from './components/Intro';
import BrandImageSection from './components/BrandBannerFooter'; // <-- import this



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // <--- for route check
  const isHome = location.pathname === '/' || location.pathname === '/home'; // home route check

  useEffect(() => {
    fetch('http://localhost:5050/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Winners:', data);
      });
  }, []);

  return (
    <>
      <CustomCursor />
      <Intro />
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      <div className="pt-24 px-4">
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
        </Routes>
      </div>

      {/* Footer Always */}
      <Footer />

      {/* NOIRÉ Banner only on Home */}
      {isHome && <BrandImageSection />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
