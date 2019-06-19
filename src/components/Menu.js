import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Menu = () => {
  return (
    <div className="side-menu">
      <Header />
      <nav>
          <Link to="/services"><li>SERVICES</li></Link>
          <Link to="/about"><li>ABOUT US</li></Link>
          <Link to="/contact"><li>CONTACT</li></Link>
      </nav>
    </div>
  )
}

export default Menu;