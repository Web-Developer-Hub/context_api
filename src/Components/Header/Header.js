import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to="/">Online Courses</Link>
            </nav>
            <nav className='navbars'>
                <Link to='/home'>Home</Link>
                <Link to="/our/courses">Courses</Link>
                <Link to="/our/courses/bestseller">Best Seller</Link>
                <Link to="/contact/us">Contact Us</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;