
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; 

export default function NavBar() {
  return (
    <nav className="navbar">
    {/* LEFT: Brand */}
    <div className="navbar-left">
      <Link to="/" className="brand">Cuizzy</Link>
    </div>

    {/* CENTER: Links */}
    <ul className="navbar-center">
      <li>
        <Link to="/e-learning">Study Material</Link>
      </li>
      <li>
        <Link to="/auth" className='login'>Login/SignUp</Link>
      </li>
    </ul>

    
  </nav>
    
  );
}
