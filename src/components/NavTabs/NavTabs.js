import React from "react";
import { Link, useLocation } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
  // https://reacttraining.com/react-router/web/api/Hooks/uselocation
  const location = useLocation();

  const registerClick = () => {
    console.log(location.pathname);
  }

  return (
    <ul className='flex'>
      <li>
        <Link to="/" onClick={registerClick} className={location.pathname === "/ ? bold : ''"}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className={location.pathname === "/about ? bold : ''"}>
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" className={location.pathname === "/blog ? bold : ''"}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" className={location.pathname === "/contact ? bold : ''"}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
