import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
 
    return (
        <>
            <h2>Home Page</h2>
            <p>This web application can be used to search for Yu-Gi-Oh! cards.</p>
            <Link to="/search">Search</Link>
            <Link to="/search">Random</Link>
            <Link to="/about">About</Link>
        </>
    );
}


export default HomePage;
