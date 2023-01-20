import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/search">Search</Link>
    </nav>
  );
}


export default Navigation;
