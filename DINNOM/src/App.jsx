import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import Login from './pages/Login';
import React, { useEffect, useState } from 'react';
import Wishlist from './components/wishlist';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Men from './pages/Men';
import Women from './pages/Women';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5050/')
      .then((res) => res.text())
      .then((data) => {
        console.log('Winners:', data);
      });
  }, []);

  return (
    <BrowserRouter>
    <CustomCursor />
      {/* Navbar with sidebar toggle */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar receives state + close handler */}
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

      {/* Main content */}
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

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
