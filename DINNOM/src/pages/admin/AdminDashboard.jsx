import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart,
  BadgePercent,
  LogOut,
  Sparkles,
} from 'lucide-react';

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
    { name: 'Products', path: 'products', icon: Package },
    { name: 'Orders', path: 'orders', icon: ShoppingCart },
    { name: 'Stats', path: 'stats', icon: BarChart },
    { name: 'Coupons', path: 'coupons', icon: BadgePercent },
    { name: 'New Arrivals', path: 'new-arrivals', icon: Sparkles },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden bg-zinc-900 text-white p-3"
      >
        ☰ Menu
      </button>

      {/* Sidebar */}
      <aside
        className={`$
          sidebarOpen ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-zinc-900 text-white flex-shrink-0 p-6 overflow-y-auto`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <Link
              to="/admin"
              className="flex items-center gap-3 text-2xl font-bold mb-10 text-white hover:text-gray-300 transition-colors"
            >
              <LayoutDashboard />
              <span>Admin Panel</span>
            </Link>
            <nav className="space-y-2">
              {menu.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.includes(`/admin/${item.path}`);
                return (
                  <Link
                    key={item.path}
                    to={`/admin/${item.path}`}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium $
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-300 hover:bg-zinc-800 hover:text-white'
                    `}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <button
            onClick={handleLogout}
            className="mt-6 w-full flex items-center gap-3 text-left py-2.5 px-4 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
