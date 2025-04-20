import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow mb-6 p-4 flex justify-center space-x-6 rounded-xl">
      <Link
        to="/"
        className={`font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
      >
        Daftar Buku
      </Link>
      <Link
        to="/add"
        className={`font-medium ${isActive('/add') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
      >
        Tambah Buku
      </Link>
    </nav>
  );
};

export default Navbar;
