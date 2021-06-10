import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
  return (
    <ul className='flex'>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/facts">
          Facts
        </Link>
      </li>
      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
