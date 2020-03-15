import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <span className='nav-left'>
          <Link to='/'>Home</Link>
        </span>
        <span className='nav-right'>
          <Link to='/login'>Login</Link>
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
