
import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="Navigation">
       <Link className="nav-route" to="/">Home</Link>
       <Link className="nav-route" to="/about">About</Link>
       <Link className="nav-route" to="/search">Search</Link>
    </nav>
  );
}

export default Navigation;