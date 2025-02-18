import { useState } from "react";
import { logo_url } from "../utils/constants";
import { useContext } from "react";
import ThemeContext from "../utils/themeContext";
import { Link } from "react-router-dom";

function Header() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <Link to="/">
        <img className="w-24 h-16 object-contain" src={logo_url} alt="logo" />
      </Link>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-500 transition-colors">
              Cart
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="text-gray-700 hover:text-blue-500 transition-colors">
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      {/* Login/Logout Button */}
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Header;
