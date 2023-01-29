import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="">
            <NavLink className={({isActive})=> isActive ? 'active':undefined} to="/Home">Home</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to = "/Contact">Contact</NavLink>
            <NavLink to = "/Cart">Cart</NavLink>
            <NavLink to = "/posts">Posts</NavLink>
           
        </div>
    );
};

export default Header;