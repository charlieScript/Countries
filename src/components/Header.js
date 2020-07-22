import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  function dark() {
    
  }
  return (
    <nav>
      <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
        <h2>Where in the world?</h2>
      </Link>
      <p onClick={dark}>
        <i className="fas fa-moon"></i> Dark Mode
      </p>
    </nav>
  );
}

export default Header;
