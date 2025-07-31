import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const menu = [
    { name: 'Products', path: 'products' },
    { name: 'Orders', path: 'orders' },
    { name: 'Stats', path: 'stats' },
    { name: 'Coupons', path: 'coupons' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden bg-zinc-900 text-white p-3"
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-zinc-900 text-white flex-shrink-0 p-6`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
            <nav className="space-y-2">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={`/admin/${item.path}`}
                  className={`block px-4 py-2 rounded transition ${
                    location.pathname.includes(item.path)
                      ? 'bg-zinc-700'
                      : 'hover:bg-zinc-800'
                  }`}
                  onClick={() => setSidebarOpen(false)} // Auto-close on mobile
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full text-left py-2 px-4 rounded bg-red-600 hover:bg-red-700 transition"
          >
            🔓 Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-4 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
