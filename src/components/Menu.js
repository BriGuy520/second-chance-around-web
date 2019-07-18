import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="the-nav">
      <header>
        <div className="nav-header">
          <Link to="/"><h1>SECOND CHANCE AROUND</h1></Link>
        </div>
        <nav>
          <Link to='/services'><li key={1}>SERVICES</li></Link>
          <Link to='/about'><li key={2}>ABOUT US</li></Link>
          <Link to='/contact'><li key={3}>CONTACT</li></Link>
        </nav>     
      </header>
    </div>
  );
}

export default Menu;