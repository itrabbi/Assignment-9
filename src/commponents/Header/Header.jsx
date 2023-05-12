import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <h1>Code with carrer..</h1>
            <div>
                <Link to="/">Statistics</Link>
                <Link to="/apjobs ">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>      
            </div>
            <button>Star Applying</button>
        </nav>
    );
};

export default Header;