import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="side-menu">
      <nav>
          <Link to="/services"><li>SERVICES</li></Link>
          <Link to="/about"><li>ABOUT US</li></Link>
          <Link to="/contact"><li>CONTACT</li></Link>
      </nav>
    </div>
  )
}

export default Menu;