import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import React, { useEffect, useState } from 'react';
import Wishlist from './components/wishlist';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5050/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Winners:', data);
        setMessage(data);
      });
  }, []);

  return (
    <BrowserRouter>
      {/* Navbar with sidebar toggle */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar receives state + close handler */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="pt-24 px-4">
        <div className="text-center text-blue-700 font-bold mt-4">{message}</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
