import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 text-white flex flex-col justify-between p-6">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Admin Panel</h2>
          <nav className="space-y-3">
            {menu.map((item) => (
              <Link
                key={item.path}
                to={`/admin/${item.path}`}
                className={`block px-4 py-2 rounded transition ${
                  location.pathname.includes(item.path)
                    ? 'bg-zinc-700'
                    : 'hover:bg-zinc-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
             <button
          onClick={handleLogout}
          className="mt-6 w-full text-left py-2 px-4 rounded bg-red-600 hover:bg-red-700 transition"
        >
          🔓 Logout
        </button>
        </div>

       
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
