import { useState } from "react";
import { logo_url } from "../utils/constants";
import { Link } from "react-router-dom";
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo_url} alt="logo" />
      <div className="nav-items">
        <ul>

          <Link to = "/"><li>Home</li></Link>
          <Link to = "/about"><li>About</li></Link>
          <Link to = "/contact"><li>Contact Us</li></Link>
          <Link to = "/cart"><li>Cart</li></Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      )}
    </div>
  );
}

export default Header;
